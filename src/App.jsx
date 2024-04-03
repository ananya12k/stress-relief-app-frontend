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
import OrderList from "../src/components/editor/List";
import OrderAdd from "../src/components/editor/Add";
import OrderEdit from "../src/components/editor/Edit";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" Component={HomePage} />
          <Route path="/exercises" Component={ExercisesPage} />
          <Route path="*" ele ment={<h1>Not Found</h1>} />
          <Route path="/insights" Component={InsightsPage} />
          <Route path="/diary" element={<OrderList />} />
          <Route path="/diary/add" element={<OrderAdd />} />
          <Route path="/diary/edit/:id" element={<OrderEdit />} />

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
