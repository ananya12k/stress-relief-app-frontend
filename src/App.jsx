import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ExercisesPage from "./pages/ExercisesPage";
import InsightsPage from "./pages/InsightsPage";
import DiaryWrtitingPage from "./pages/DiaryWrtitingPage";
import LoginComp from "./components/modals/LoginComp";
import SignupForm from "./components/forms/SignupForm";
import LoginForm from "./components/forms/LoginForm";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" Component={HomePage} />
          <Route path="/exercises" Component={ExercisesPage} />
          <Route path="*" ele ment={<h1>Not Found</h1>} />
          <Route path="/insights" Component={InsightsPage} />
          <Route path="/diary" Component={DiaryWrtitingPage} />
          <Route path="/login" element={<LoginComp />} />
          <Route path="/login/form" element={<LoginForm />} />
          <Route path="/signup/form" element={<SignupForm />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
