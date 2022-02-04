import React from "react";

import logo from "./assets/userlogo_lowres.png";

import "./Home.css";

const Home = () => {
  return (
    <div id="home-container">
      <div id="home">
        <h1>JONES DAVID</h1>
        <h2>REDOMIC</h2>
        <div id="home-bottom-bar">
          <div id="home-bottom-bar-div"></div>
          <img src={logo} alt="Logo" />
          <div id="home-bottom-bar-div"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
