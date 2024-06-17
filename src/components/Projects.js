import React from "react";
import { motion } from "framer-motion";
import Hover from "react-3d-hover";

import portfolio from "./assets/portfolioproject.png";
import locaro from "./assets/locarologo.png";
import ljap from "./assets/ljap.gif";
import sentinels from "./assets/sentinels.jpg";

import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      icon: locaro,
      name: "Locaro",
      desc: "Early-stage B2B2C Startup based in Mumbai - Ecommerce platform that enables fast hyperlocal deliveries from shops and stores",
      link: "https://www.locaro.in",
      link_name: "Website",
      ongoing: true,
    },
    {
      icon: sentinels,
      name: "Crypto Sentinels",
      desc: "Monitoring/Tracking layer on top of popular Blockchain Networks for Government Agencies. Built for Smart India Hackathon 2023 (SIH1445).",
      link: "",
      link_name: "",
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
            <Hover>
              <div className="projects-holder">
                <img className="projects-icon" src={e.icon} alt={e.name} />
                <div className="projects-information-holder">
                  <h2 className="projects-name">{e.name}</h2>
                  <p className="projects-desc">{e.desc}</p>
                  <div className="projects-link-holder">
                    {e.link_name === "" ? (
                      <></>
                    ) : (
                      <a
                        className="projects-link"
                        href={e.link}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {e.link_name}
                      </a>
                    )}
                  </div>
                </div>
                {e.ongoing ? (
                  <span className="projects-status-ongoing">ONGOING</span>
                ) : (
                  <span className="projects-status-completed">COMPLETED</span>
                )}
              </div>
            </Hover>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Projects;
