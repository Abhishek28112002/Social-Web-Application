import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import LandingPage from "./LandingPage"; // Import your LandingPage component here
import Home from './Home/home'
import Game from './Game/game'
import NavBar from "./NavBar";
import Wordle from "./Game/Wordle";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/*" element={<Main />} />
        </Routes>
      </Router>
    </div>
  );
}

function Main() {
  const location = useLocation();

  useEffect(() => {
    // You can access the current pathname using location.pathname
    console.log("Current Path:", location.pathname);
  }, [location]);

  return (
    <>
      {location.pathname === '/' ? null : <NavBar />}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/games" element={<Game />} />
        <Route path="/games/wordle" element={<Wordle />} />
      </Routes>
    </>
  );
}

export default App;
