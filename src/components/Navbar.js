import React from "react";
import "./Navbar.css";

import logo from "./assets/userlogo_lowres.png";

const Navbar = (page) => {
  return (
    <div id="navbar-container">
      <div id="navbar">
        <div id="navbar-top-section">
          <img src={logo} alt="Redomic Logo" />
        </div>
        <div className="navbar-filler"></div>
        <div className="navbar-button">Home</div>
        <div className="navbar-button">About</div>
        <div className="navbar-button">Projects</div>
      </div>
    </div>
  );
};

export default Navbar;
