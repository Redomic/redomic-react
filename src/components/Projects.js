import React from "react";

import portfolio from "./assets/portfolioproject.png";
import flutter from "./assets/flutterproject.png";
import locaro from "./assets/locarologo.png";

import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      icon: portfolio,
      name: "Redomic",
      desc: "This site was made with React. Will be expanded for more features and projects soon.",
      link: "https://github.com/Redomic/redomic-portfolio-react",
      link_name: "Github Repo",
      ongoing: false,
    },
    {
      icon: locaro,
      name: "Locaro",
      desc: "Early-stage startup that enables shops to deliver and sell online in a seamless way and allows you to buy from shops and stores near you.",
      link: "https://www.locaro.in",
      link_name: "Website",
      ongoing: true,
    },
    {
      icon: locaro,
      name: "Locaro",
      desc: "Early-stage startup that enables shops to deliver and sell online in a seamless way and allows you to buy from shops and stores near you.",
      link: "https://www.locaro.in",
      link_name: "Website",
      ongoing: true,
    },
    {
      icon: locaro,
      name: "Locaro",
      desc: "Early-stage startup that enables shops to deliver and sell online in a seamless way and allows you to buy from shops and stores near you.",
      link: "https://www.locaro.in",
      link_name: "Website",
      ongoing: true,
    },
  ];
  return (
    <div
      id="projects-container"
      style={projects.length <= 2 ? { justifyContent: "center" } : null}
    >
      <div
        id="projects-holder-container"
        // style={projects.length <= 2 ? { justifyContent: "center" } : null}
      >
        {projects.map((e) => {
          return (
            <div className="projects-holder">
              <img className="projects-icon" src={e.icon} alt={e.name} />
              <div className="projects-information-holder">
                <h2 className="projects-name">{e.name}</h2>
                <p className="projects-desc">{e.desc}</p>
                <div className="projects-link-holder">
                  <a
                    className="projects-link"
                    href={e.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {e.link_name}
                  </a>
                </div>
              </div>
              {e.ongoing ? (
                <span className="projects-status-ongoing">ONGOING</span>
              ) : (
                <span className="projects-status-completed">COMPLETED</span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
