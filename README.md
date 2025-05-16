# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

Additional Notes:
A simple React-based quiz application was created.

Component Structure:

Created three main components: Home, Question, and Result.

Retained the default JSX files (App.jsx and main.jsx) along with their corresponding CSS files.

Utilized props to pass data and handler functions between components.

State Management:

Used the useState hook to manage user input, selected answers, quiz progression, and error handling.

User Form:

Built a form on the Home page to collect the user's first name, quiz category, and difficulty level.

Question Rendering:

Displayed quiz questions with multiple-choice options using radio buttons.

Used dangerouslySetInnerHTML with self-closing tags to correctly render special characters from the API. Identified potential security concerns (XSS) and explored safer alternatives. regardless the former was used for this demonstration.

Result Component:

Compared the user's selected answer to the correct one.

Displayed a customized message and revealed the correct answer if the user was incorrect.

Included a restart button to allow users to take another quiz.

Styling:

Applied CSS Flexbox for layout and centering components.

Used modular CSS for scoped, component-specific styling.

Tools Used:
GitHub Copilot: Assisted with code commenting and inline suggestions.

ChatGPT: Utilized for researching solutions, debugging, and refining logic.

Disco: Used to review and reference documentation throughout development.

Key Learnings:
Strengthened familiarity with version control by frequently and intentionally using Git/GitHub

Gained hands-on experience with modular CSS, observing the benefits of scoped styling compared to traditional global CSS.

Reinforced command-line learnings by recalling and applying bash terminal commands from memory more often than not.


