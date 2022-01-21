import React from "react";
import { Routes, Route } from "react-router-dom";

import Background from "./components/Background.js";
import Navbar from "./components/Navbar.js";

import Home from "./components/Home.js";
import About from "./components/About.js";

import "./App.css";

const App = () => {
  return (
    <div>
      <Navbar />
      <Background />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default App;
