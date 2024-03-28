import { useState } from "react";

import CardGrid from "./CardGrid";
import FetchTrivia from "./FetchTrivia";

export default function App() {
  const [selectedOption, setSelectedOption] = useState("");
  const [keyToUpdate, setKeyToUpdate] = useState(0); // Initialize keyToUpdate

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleButtonClick = () => {
    // Update the state variable to trigger a re-render of FetchTrivia
    setKeyToUpdate((prevKey) => prevKey + 1);
  };

  return (
    <div className="App">
      <h1>FlashCards</h1>
      <div className="actions-container">
        <select value={selectedOption} onChange={handleSelectChange}>
          <option value="general">General</option>
          <option value="artliterature">Art and Literature</option>
          <option value="language">Language</option>
          <option value="sciencenature">Science and Nature</option>
          <option value="fooddrink">Food/Drink</option>
          <option value="peopleplaces">People and Places</option>
          <option value="geography">Geography</option>
          <option value="historyholidays">History and Holidays</option>
          <option value="entertainment">Entertainment</option>
          <option value="toysgames">Toys/Games</option>
          <option value="music">Music</option>
          <option value="mathematics">Mathematics</option>
          <option value="religionmythology">Religion and Mythology</option>
          <option value="sportsleisure">Sports and Leisure</option>
        </select>

        <button onClick={handleButtonClick}>More</button>
      </div>

      <FetchTrivia selectedOption={selectedOption} keyToUpdate={keyToUpdate} />

      <CardGrid />
    </div>
  );
}
