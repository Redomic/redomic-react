import React from "react";

import portfolio from "./assets/portfolioproject.png";
import flutter from "./assets/flutterproject.png";
import locaro from "./assets/locarologo.png";

import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      icon: portfolio,
      name: "Portfolio - REACT",
      desc: "This portfolio was made with React",
      repo: "https://github.com/Redomic/redomic-portfolio-react",
      ongoing: true,
    },
    {
      icon: flutter,
      name: "Portfolio - FLUTTER",
      desc: "Outdated portfolio site made with flutter",
      repo: "https://github.com/Redomic/redomic-portfolio",
      ongoing: false,
    },

    {
      icon: locaro,
      name: "Locaro",
      desc: "Early-stage startup that allows you to buy from nearby shops and allows businesses to sell and delivery their products online in a seamless way",
      repo: "https://github.com/Locaro-in",
      ongoing: true,
    },
  ];
  return (
    <div id="projects-container">
      {projects.map((e) => {
        return (
          <div className="projects-holder">
            <img className="projects-icon" src={e.icon} alt={e.name} />
            <h2 className="projects-name">{e.name}</h2>
            <p className="projects-desc">{e.desc}</p>
            <a
              className="projects-repo"
              href={e.repo}
              target="_blank"
              rel="noreferrer"
            >
              REPO
            </a>
            <h3 className="projects-status">
              Current Status:
              <span className="projects-status-button">
                {e.ongoing ? "COMPLETED" : "ONGOING"}
              </span>
            </h3>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
