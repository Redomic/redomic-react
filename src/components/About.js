import React, { useState, useEffect } from "react";

import github from "./assets/github.png";
import linkedin from "./assets/linkedin.png";
import twitch from "./assets/twitch.png";
import instagram from "./assets/instagram.png";

import "./About.css";

const About = () => {
  const [age, setAge] = useState(0);

  const getAge = (birthDate) => {
    const newAge = Math.floor(
      (new Date() - new Date(birthDate).getTime()) / 3.15576e10
    );
    setAge(newAge);
  };

  useEffect(() => {
    getAge("2003-06-06");
  });

  return (
    <div id="about-container">
      <div id="about-holder">
        <h1 className="about-title">
          Hey, I am <span className="accentred">Jones</span>
        </h1>

        <p className="about-information">
          {age === 18 ? "An" : "A"} <span className="accentred">{age}</span>{" "}
          year-old Developer <br />
          who uses <span className="nodejs">NodeJS</span>,{" "}
          <span className="flutter">Flutter</span>,{" "}
          <span className="python">Python</span> and{" "}
          <span className="accentred">Others</span>
        </p>

        <h2 className="about-checkmeout">Check me out on:</h2>

        <div className="about-icons-holder">
          <div className="about-icon">
            <img src={github} alt="github" />
            <h3>GITHUB</h3>
          </div>

          <div className="about-icon">
            <img src={linkedin} alt="linkedin" />
            <h3>LINKEDIN</h3>
          </div>

          <div className="about-icon">
            <img src={twitch} alt="twitch" />
            <h3>TWITCH</h3>
          </div>

          <div className="about-icon">
            <img src={instagram} alt="instagram" />
            <h3>INSTAGRAM</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
