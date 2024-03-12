import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ExercisesPage from "./pages/ExercisesPage";
import InsightsPage from "./pages/InsightsPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" Component={HomePage} />
          <Route path="/exercises" Component={ExercisesPage} />
          <Route path="*" ele ment={<h1>Not Found</h1>} />
          <Route path="/insights" Component={InsightsPage} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
