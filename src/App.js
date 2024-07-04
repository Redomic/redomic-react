import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import { SizeContext } from "./Context.js";

import Background from "./components/Background.js";
import Navbar from "./components/Navbar.js";

import Home from "./components/Home.js";
import About from "./components/About.js";
import Projects from "./components/Projects.js";

import "./App.css";
import { AnimatedCursor } from "./components/AnimatedCursor.jsx";

const App = () => {
  const location = useLocation();

  const [size, setSize] = useState({
    x: window.innerWidth,
    y: window.innerHeight,
  });

  const updateSize = () =>
    setSize({
      x: window.innerWidth,
      y: window.innerHeight,
    });

  useEffect(() => {
    window.onresize = updateSize;
  }, []);

  return (
    <div>
      <SizeContext.Provider value={{ size }}>
        <Navbar />
        <Background />
        <AnimatedCursor />
        <AnimatePresence exitBeforeEnter>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </AnimatePresence>
      </SizeContext.Provider>
    </div>
  );
};

export default App;
