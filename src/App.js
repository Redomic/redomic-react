import React from "react";

import Background from "./components/Background.js";
import Pages from "./components/Pages.js";
import Navbar from "./components/Navbar.js";

import "./App.css";

const App = () => {
  return (
    <div>
      <Background>
        <div>
          <Navbar></Navbar>
          <Pages></Pages>
        </div>
      </Background>
    </div>
  );
};

export default App;
