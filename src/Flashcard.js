export default function Flashcard({ question, answer }) {
  return (
    <div className="container-card">
      <div className="flashcard">
        <div className="front">{question}</div>
        <div className="back">{answer}</div>
      </div>
    </div>
  );
}
