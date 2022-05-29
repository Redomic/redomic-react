import React from "react";
import { motion } from "framer-motion";

import portfolio from "./assets/portfolioproject.png";
import locaro from "./assets/locarologo.png";
import ljap from "./assets/ljap.gif";

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
      desc: "Early-stage startup based in India that allows you to buy from shops and stores near you - Enables small to medium businesses to catalog, manage and deliver their products online.",
      link: "https://www.locaro.in",
      link_name: "Website",
      ongoing: true,
    },
    {
      icon: ljap,
      name: "Literally Just a Pixel",
      desc: "A collection of 1000 unique coloured pixel NFTs on the Ethereum blockchain using the ERC-721 standard.",
      link: "https://www.literallyjustapixel.com",
      link_name: "Website",
      ongoing: false,
    },
  ];
  return (
    <motion.div
      id="projects-container"
      style={projects.length <= 2 ? { justifyContent: "center" } : null}
      initial={{ y: "20vw", opacity: 0 }}
      animate={{ y: "0vw", opacity: 1, scale: 1 }}
      exit={{ y: "-20vw", opacity: 0, transition: { duration: 0.2 } }}
      transition={{ duration: 0.4, ease: "easeOut" }}
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
    </motion.div>
  );
};

export default Projects;
