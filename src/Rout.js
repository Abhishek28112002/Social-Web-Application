import React from "react";
import ReactDOM from "react-dom";
import { Routes, Route } from "react-router-dom";
import App from "./components/Landing_page/App";
import Home from "./components/Home/Home";
import People from "./components/People/People";
import Chat from "./components/Chat/Chat";
import Popularity from "./components/Popularity/Popularity";
import Games from "./components/Games/Games";
import Profile from "./components/Profile/Profile";
import Contact from "./components/Contact/Contactus";
const Rout = () => {
return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/people" element={<People />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/popularity" element={<Popularity />} />
          <Route path="/games" element={<Games />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </>
  );
};
export default Rout;
