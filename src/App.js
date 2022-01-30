import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import Background from "./components/Background.js";
import Navbar from "./components/Navbar.js";

import Home from "./components/Home.js";
import About from "./components/About.js";
import Projects from "./components/Projects.js";

import "./App.css";

const App = () => {
  const location = useLocation();
  return (
    <div>
      <Navbar />
      <Background />
      <TransitionGroup>
        <CSSTransition timeout={450} classNames="fade" key={location.key}>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
};

export default App;
