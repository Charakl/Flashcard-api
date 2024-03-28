import { useEffect, useState } from "react";

import Flashcard from "./Flashcard";

export default function FetchTrivia({ selectedOption, keyToUpdate }) {
  const [result, setResult] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    function () {
      async function fetchTrivia(category) {
        try {
          setIsLoading(true);
          const response = await fetch(
            `https://api.api-ninjas.com/v1/trivia?category=${category}&limit=9`,
            {
              method: "GET",
              headers: {
                "X-Api-Key": "I4xBjiIR/HXEmRa4fwY8ug==m6wQuVYjYn6x5uSU",
              },
            }
          );
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const resultData = await response.json();
          console.log(resultData);
          setResult(resultData);
        } catch (error) {
          console.error("Error:", error);
        } finally {
          setIsLoading(false);
        }
      }

      fetchTrivia(selectedOption);
    },
    [selectedOption, keyToUpdate]
  );

  return (
    <div className="flashcard-container">
      {isLoading ? (
        <span class="loader"></span>
      ) : (
        result.map((res, index) => (
          <Flashcard key={index} question={res.question} answer={res.answer} />
        ))
      )}
    </div>
  );
}
