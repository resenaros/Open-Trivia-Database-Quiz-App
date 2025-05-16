//import of useEffect for fetching data
//import of useState for managing state
import { useEffect, useState } from "react";
import styles from "./QuestionForm.module.css";

//merge the correct answer and incorrect answers into a single array and shuffle them.
const shuffleAnswers = (correct, incorrect) => {
  //!ensures that the correct answer is always included in the shuffled array and in a random position.
  return [...incorrect, correct].sort(() => Math.random() - 0.5);
};

//declaration of the Question component with parameters/props data and onSubmitAnswer.
const Question = ({ data, onSubmitAnswer }) => {
  //stores the question data, selected answer, error message, and API error message in state variables.
  const [questionData, setQuestionData] = useState(null);
  //stores the user's selected answer in state.
  const [selected, setSelected] = useState("");
  //holds error message if the user does not select an answer.
  const [error, setError] = useState("");
  //holds API error message if the fetch fails.
  const [apiError, setApiError] = useState("");

  //!useEffect is used to fetch a question from the Open Trivia Database API when the component is mounted or when the data prop (category/difficulty) changes.
  useEffect(() => {
    const { category, difficulty } = data;
    //queries 1 multiple choice question from the Open Trivia Database API based on the selected category and difficulty.
    fetch(
      `https://opentdb.com/api.php?amount=1&category=${category}&difficulty=${difficulty}&type=multiple`
    )
      //converts the response to JSON format.
      .then((res) => res.json())
      //checks if the response is valid. and sets the question data in state.
      .then((result) => {
        if (result.response_code === 0) {
          //if the response code is 0, it means the question was fetched successfully.
          const q = result.results[0];
          q.allAnswers = shuffleAnswers(q.correct_answer, q.incorrect_answers);
          setQuestionData(q);
        }
        //if the response code is not 0, it means there was an error fetching the question.
        else {
          setApiError("Failed to fetch question.");
        }
      })
      //catches any errors that occur during the fetch process and sets the API error message in state.
      .catch(() => setApiError("API error occurred."));
  }, [data]);

  const handleSubmit = (e) => {
    //prevents the default behavior of the form submission.
    e.preventDefault();
    //if no answer is selected, set the error message.
    if (!selected) {
      setError("Please select an answer!");
      //return early to prevent further execution.
      return;
    }
    setError("");
    //calls the onSubmitAnswer function passed as a prop to the component.
    //passes the selected answer and the correct answer to the function.
    onSubmitAnswer(selected, questionData.correct_answer);
  };
  //if there is an API error, display the red error message.
  if (apiError) return <p style={{ color: "red" }}>{apiError}</p>;
  //if data hasn't loaded, display the loading message.
  if (!questionData) return <p>Loading...</p>;

  //alternative method used to correctly render the question and answer options. However based on web documentation this method may be vulnerable to XSS attacks.
  // if this is encountered again I will test run other methods found.
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <fieldset className={styles.fieldset}>
        <legend
          className={styles.question}
          dangerouslySetInnerHTML={{ __html: questionData.question }}
        />
        <div className={styles.answers}>
          {questionData.allAnswers.map((ans, i) => (
            <label key={i} className={styles.answer}>
              <input
                type="radio"
                name="answer"
                value={ans}
                checked={selected === ans}
                onChange={() => setSelected(ans)}
              />
              <span dangerouslySetInnerHTML={{ __html: ans }} />
            </label>
          ))}
        </div>
      </fieldset>

      {error && <p className={styles.error}>{error}</p>}

      <button className={styles.submit} type="submit" disabled={!selected}>
        Submit Answer
      </button>
    </form>
  );

  //this is the original code before the changes were made, but some characters on the api were not rendering correctly.
  // return (
  //   <form onSubmit={handleSubmit}>
  //     <h2>{questionData.question}</h2>
  //     <div>
  //       {questionData.allAnswers.map((ans, index) => (
  //         <label
  //           key={index}
  //           style={{ display: "block", marginBottom: "0.5rem" }}
  //         >
  //           <input
  //             type="radio"
  //             name="answer"
  //             value={ans}
  //             checked={selected === ans}
  //             onChange={() => setSelected(ans)}
  //           />
  //           <span style={{ marginLeft: "0.5rem" }}>{ans}</span>
  //         </label>
  //       ))}
  //     </div>

  //     {error && <p style={{ color: "red", marginTop: "1rem" }}>{error}</p>}

  //     <button type="submit" disabled={!selected} style={{ marginTop: "1rem" }}>
  //       Submit Answer
  //     </button>
  //   </form>
  // );
};

export default Question;
