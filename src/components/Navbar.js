import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { SizeContext } from "../Context";

import logo from "./assets/userlogo_lowres.png";

import "./Navbar.css";

const Navbar = () => {
  const [page, setPage] = useState(0);
  const { size } = useContext(SizeContext);

  useEffect(() => {
    if (window.location.pathname === "/") {
      setPage(0);
    } else if (window.location.pathname === "/about") {
      setPage(1);
    } else if (window.location.pathname === "/projects") {
      setPage(2);
    }
  }, []);

  useEffect(() => {
    console.log(size);
  }, [size]);

  return (
    <div>
      {size.x >= 1100 ? (
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
      ) : (
        <div id="navbar-container-mobile">
          <div id="navbar-mobile">
            <div id="navbar-top-section-mobile">
              <img src={logo} alt="Redomic Logo" />
            </div>

            <div
              className="navbar-selector-mobile"
              style={{ marginLeft: `${11.4 + page * 10}rem` }}
            />

            <nav className="navbar-button-mobile-container">
              <Link
                to="/"
                className="navbar-button-mobile"
                style={{ textDecoration: "none" }}
                onClick={() => setPage(0)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="navbar-button-mobile"
                style={{ textDecoration: "none" }}
                onClick={() => setPage(1)}
              >
                About
              </Link>
              <Link
                to="/projects"
                className="navbar-button-mobile"
                style={{ textDecoration: "none" }}
                onClick={() => setPage(2)}
              >
                Projects
              </Link>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
