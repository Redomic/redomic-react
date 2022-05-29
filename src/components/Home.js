import React from "react";
import { motion } from "framer-motion";

import logo from "./assets/userlogo_lowres.png";

import "./Home.css";

const Home = () => {
  return (
    <motion.div
      id="home-container"
      initial={{ y: "20vw", opacity: 0 }}
      animate={{ y: "0vw", opacity: 1, scale: 1 }}
      exit={{ y: "-20vw", opacity: 0, transition: { duration: 0.2 } }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div id="home">
        <h1>JONES DAVID</h1>
        <h2>REDOMIC</h2>
        <div id="home-bottom-bar">
          <div id="home-bottom-bar-div"></div>
          <img src={logo} alt="Logo" />
          <div id="home-bottom-bar-div"></div>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
