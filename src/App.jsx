//useState hook and 3 components (Home, Question, Result), and styles are imported.
import { useState } from "react";
import Home from "./components/home-page";
import Question from "./components/question-form";
import Result from "./components/results";

const App = () => {
  // State to manage which page or component is active
  // in the quiz app (home, question, or result).
  // it is initially set to the Home component
  const [step, setStep] = useState("home");
  // State to manage form data (name, category, difficulty) from the Home component.
  const [formData, setFormData] = useState({});
  // State to manage selected answer and correct answer in the Question component.
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState("");

  // !Function to start the quiz by setting the form data and changing the step/component to "question".
  const startQuiz = (data) => {
    setFormData(data);
    setStep("question");
  };

  // Function to handle the answer submission from the Question component.
  //!passed on as a prop to the Question component via onSubmitAnswer.
  const handleAnswer = (selected, correct) => {
    //update the selected answer and correct answer states
    setSelectedAnswer(selected);
    setCorrectAnswer(correct);
    // Change the step/component to "result" after submitting the answer.
    setStep("result");
  };

  //! Function to restart the quiz by resetting the form data, selected answer, and correct answer states.
  // It also changes the step/component back to "home".
  const restartQuiz = () => {
    setFormData({});
    setSelectedAnswer("");
    setCorrectAnswer("");
    setStep("home");
  };

  return (
    <div className="App">
      {/* Render the appropriate component based on the current step.*/}
      {/* the prop onStart is passed to the Home component*/}
      {step === "home" && <Home onStart={startQuiz} />}
      {/*the prop data is passed to the Question component*/}
      {/*} the prop onSubmitAnswer is passed to the Question component*/}
      {step === "question" && (
        <Question data={formData} onSubmitAnswer={handleAnswer} />
      )}
      {/* the prop name, selected, correct, and onRestart are passed to the Result component*/}
      {step === "result" && (
        <Result
          name={formData.name}
          selected={selectedAnswer}
          correct={correctAnswer}
          onRestart={restartQuiz}
        />
      )}
    </div>
  );
};

export default App;
