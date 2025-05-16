import { useState } from "react";
import Home from "./components/HomePage";
import Question from "./components/QuestionForm";
import Results from "./components/Results";

const App = () => {
  const [step, setStep] = useState("home");
  const [formData, setFormData] = useState({});
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState("");

  const startQuiz = (data) => {
    setFormData(data);
    setStep("question");
  };

  const handleAnswer = (selected, correct) => {
    setSelectedAnswer(selected);
    setCorrectAnswer(correct);
    setStep("result");
  };

  const restartQuiz = () => {
    setFormData({});
    setSelectedAnswer("");
    setCorrectAnswer("");
    setStep("home");
  };

  return (
    <div className="App">
      {/* Render the appropriate component based on the current step */}
      {step === "home" && <Home onStart={startQuiz} />}
      {step === "question" && (
        <Question data={formData} onSubmitAnswer={handleAnswer} />
      )}
      {step === "result" && (
        <Results
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
