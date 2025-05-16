import styles from "./Results.module.css";
//props received from the parent component. (name, selected, correct, onRestart)
const Results = ({ name, selected, correct, onRestart }) => {
  //compare the selected answer with the correct answer, returns true or false.0
  const isCorrect = selected === correct;

  return (
    <div className={styles.container}>
      {/* Display the user's name and a message corresponding to whether they got the answer correct or not. */}
      <h2
        className={`${styles.heading} ${
          isCorrect ? styles.correct : styles.incorrect
        }`}
      >
        {isCorrect ? `Great job, ${name}!` : `Nice try, ${name}.`}
      </h2>
      {/* conditional rendering based on whether the answer is correct or not */}
      {!isCorrect && (
        <p>
          The correct answer was:{" "}
          <span className={styles.correctAnswer}>{correct} </span>
        </p>
      )}
      <button className={styles.button} onClick={onRestart}>
        Try Another Question
      </button>
    </div>
  );
};

export default Results;
