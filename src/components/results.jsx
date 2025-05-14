//props received from the parent component. (name, selected, correct, onRestart)
const Result = ({ name, selected, correct, onRestart }) => {
  //compare the selected answer with the correct answer, returns true or false.0
  const isCorrect = selected === correct;

  return (
    <div>
      {/* Display the user's name and a message corresponding to whether they got the answer correct or not. */}
      <h2>{isCorrect ? `Great job, ${name}!` : `Nice try, ${name}.`}</h2>
      {/* conditional rendering based on whether the answer is correct or not */}
      {!isCorrect && (
        <p>
          The correct answer was: <strong>{correct} </strong>
        </p>
      )}
      <button onClick={onRestart}>Try Another Question</button>
    </div>
  );
};

export default Result;
