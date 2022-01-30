import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import logo from "./assets/userlogo_lowres.png";

import "./Navbar.css";

const Navbar = () => {
  const [page, setPage] = useState(0);

  useEffect(() => {
    if (window.location.pathname === "/") {
      setPage(0);
    } else if (window.location.pathname === "/about") {
      setPage(1);
    } else if (window.location.pathname === "/projects") {
      setPage(2);
    }
  }, []);

  return (
    <div id="navbar-container">
      <div id="navbar">
        <div id="navbar-top-section">
          <img src={logo} alt="Redomic Logo" />
        </div>

        <div
          className="navbar-selector"
          style={{ marginTop: `${page * 10}rem` }}
        />

        <nav>
          <Link
            to="/"
            className="navbar-button"
            style={{ textDecoration: "none" }}
            onClick={() => setPage(0)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="navbar-button"
            style={{ textDecoration: "none" }}
            onClick={() => setPage(1)}
          >
            About
          </Link>
          <Link
            to="/projects"
            className="navbar-button"
            style={{ textDecoration: "none" }}
            onClick={() => setPage(2)}
          >
            Projects
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
