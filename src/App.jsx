import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/Home";
import ExercisesPage from "./pages/ExercisesPage";
import InsightsPage from "./pages/InsightsPage";
import ExtrasPage from "./pages/ExtrasPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" Component={HomePage} />
          <Route path="/exercises" Component={ExercisesPage} />
          <Route path="*" element={<h1>Not Found</h1>} />
          <Route path="/insights" element={InsightsPage} />
          <Route path="/extras" element={ExtrasPage} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
