import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/NavBar";
import LoginPage from "./components/LoginPage";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/login" Component={LoginPage} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
