//importing UseState hook from react
import { useState } from "react";
import styles from "./home-page.module.css";

// Home component to display the welcome message and form
//receives onStart as a prop to start the quiz
const Home = ({ onStart }) => {
  //initialize state object with empty strings for name, category, and difficulty
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    difficulty: "",
  });

  //this will be used to manage the error message.
  //it is initially set to an empty string
  const [error, setError] = useState("");

  //!handleChange function to update the formData state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // this prevents the default refresh of the page when the form is submitted.
  const handleSubmit = (e) => {
    e.preventDefault();

    //!destructure name, category, and difficulty from formData.
    const { name, category, difficulty } = formData;
    //validates that all fields are filled out.
    if (!name || !category || !difficulty) {
      setError("All fields are required!");
      return;
    }
    // if all fields are filled out, error is set to an empty string.
    setError("");
    onStart(formData);
  };

  return (
    <>
      {/* !Form to collect user data (name, category, difficulty)*/}
      <form className={styles.form} onSubmit={handleSubmit}>
        {/*Welcome message and instructions*/}
        <h1 className={styles.heading}>Welcome to the Quiz App!</h1>
        <p className={styles.text}>Fill out the form to get started.</p>
        {/* name input field */}
        <label className={styles.lable}>
          First Name:
          <input
            className={styles.input}
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        {/* category dropdown  */}
        <label classNamer={styles.lable}>
          Category:
          <select
            className={styles.select}
            name="category"
            value={formData.category}
            onChange={handleChange}
          >
            <option value="">--Select--</option>
            <option value="9">General Knowledge</option>
            <option value="18">Science: Computers</option>
            <option value="19">Science: Mathematics</option>
            <option value="22">Geography</option>
            <option value="23">History</option>
            <option value="24">Politics</option>
            <option value="25">Art</option>
            <option value="27">Animals</option>
            <option value="28">Vehicles</option>
            <option value="30">Science: Gadgets</option>
            <option value="31">Entertainment: Japanese Anime & Manga</option>
            <option value="32">Entertainment: Cartoons & Animations</option>
          </select>
        </label>
        {/* difficulty dropdown */}
        <label className={styles.lable}>
          Difficulty:
          <select
            className={styles.select}
            name="difficulty"
            value={formData.difficulty}
            onChange={handleChange}
          >
            <option value="">--Select--</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </label>
        {/* error message */}
        {/*!if error is not an empty string, display the error message*/}
        {error && <p className={styles.error}>{error}</p>}
        {/*!submit button to start the quiz. disabled until answer is selected*/}
        <button type="submit" className={styles.button}>
          Start Quiz
        </button>
      </form>
    </>
  );
};

export default Home;
