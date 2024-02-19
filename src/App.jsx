import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/Home";
import Navbar from "./components/NavBar";

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" Component={HomePage} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
