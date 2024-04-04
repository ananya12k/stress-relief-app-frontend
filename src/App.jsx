import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ExercisesPage from "./pages/ExercisesPage";
import InsightsPage from "./pages/InsightsPage";
import LoginComp from "./components/modals/LoginComp";
import SignupForm from "./components/forms/SignupForm";
import LoginForm from "./components/forms/LoginForm";
import GratitudeJournal from "./pages/GratitudeJournal";
import BreathingExercise from "./pages/BreathingExercise";
import Add from "../src/components/editor/Add";
import Edit from "../src/components/editor/Edit";
import MyComponent from "./components/editor/MyComponent";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/exercises" element={<ExercisesPage />} />
          <Route path="*" element={<h1>Not Found</h1>} />
          <Route path="/insights" element={<InsightsPage />} />
          <Route path="/diary" element={<MyComponent />} />
          <Route path="/diary/add" element={<Add />} />
          <Route path="/diary/edit/:id" element={<Edit />} />

          <Route path="/login" element={<LoginComp />} />
          <Route path="/login/form" element={<LoginForm />} />
          <Route path="/signup/form" element={<SignupForm />} />
          <Route path="/gratitude" element={<GratitudeJournal />} />
          <Route path="/breathing" element={<BreathingExercise />} />
          {/* <Route path="/allentries" element={<ViewAllEntriesPage />} />
          <Route path="/newentry" element={<ShowNewPage />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
