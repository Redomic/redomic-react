import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// import github from "./assets/github.svg";
// import linkedin from "./assets/linkedin.svg";
// import twitch from "./assets/twitch.svg";
// import instagram from "./assets/instagram.svg";

import "./About.css";

const About = () => {
  const [age, setAge] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      let time =
        (new Date() - new Date("2003-06-06").getTime()) /
        (1000 * 60 * 60 * 24 * 365.25);
      setAge(time.toString().substring(0, 5)); //Change to substring(0, 3) if you don't want the decimals
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      id="about-container"
      initial={{ y: "20vw", opacity: 0 }}
      animate={{ y: "0vw", opacity: 1, scale: 1 }}
      exit={{ y: "-20vw", opacity: 0, transition: { duration: 0.2 } }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div id="about-holder">
        <h1 className="about-title">
          Hey, I'm <span className="accentred">Jones</span>.
        </h1>

        <p className="about-information">
          {age === 18 ? "An" : "A"} <span className="accentred">{age}</span>{" "}
          year-old aspiring entrepreneur
          <br />
          hoping to make a difference through my work. <br />
          {/* <span className="nodejs">NodeJS</span>,{" "}
          <span className="flutter">Flutter</span>,{" "}
          <span className="python">Python</span> and{" "}
          <span className="accentred">Others</span> */}
        </p>
        <h2 className="about-checkmeout">Check me out on:</h2>

        <div className="about-icons-holder">
          <a
            className="about-icon"
            href="https://github.com/Redomic"
            target="_blank"
            rel="noreferrer"
          >
            {/* GITHUB SVG */}
            <svg
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              width="128.000000pt"
              height="128.000000pt"
              viewBox="0 0 128.000000 128.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              <g
                transform="translate(0.000000,128.000000) scale(0.100000,-0.100000)"
                fill="currentColor"
                stroke="currentColor"
              >
                <path
                  d="M145 1231 c-48 -22 -79 -54 -100 -103 -13 -32 -15 -104 -15 -490 0
                    -419 2 -456 19 -493 22 -48 54 -79 103 -100 32 -13 104 -15 490 -15 419 0 456
                    2 493 19 48 22 79 54 100 103 23 56 23 920 0 976 -21 49 -52 81 -100 103 -37
                    17 -74 19 -495 19 -421 0 -458 -2 -495 -19z m606 -137 c243 -72 387 -298 350
                    -546 -23 -146 -120 -281 -251 -346 -74 -38 -84 -38 -110 -12 -17 17 -20 33
                    -20 102 0 45 -5 96 -12 115 -6 18 -9 35 -5 39 3 4 28 10 54 15 62 12 92 34
                    121 90 29 56 27 144 -5 187 -17 22 -20 38 -16 74 3 25 1 48 -5 52 -5 3 -31 -6
                    -57 -19 -43 -24 -52 -25 -103 -15 -39 7 -74 7 -114 0 -51 -10 -62 -8 -97 10
                    -58 29 -63 27 -60 -27 2 -31 -3 -59 -14 -80 -23 -43 -22 -137 1 -182 22 -45
                    55 -67 122 -84 35 -9 56 -20 58 -31 5 -24 -24 -30 -82 -17 -107 25 -165 95
                    -174 210 -3 49 0 76 13 106 10 22 18 65 19 96 3 88 34 108 114 73 57 -26 262
                    -27 311 -2 19 10 48 18 64 18 23 0 31 -7 43 -36 8 -19 14 -52 13 -72 -1 -20 6
                    -53 16 -72 13 -25 18 -55 18 -102 -2 -113 -51 -187 -146 -218 -27 -8 -37 -16
                    -33 -27 3 -8 6 -48 6 -89 l0 -75 60 32 c195 104 274 353 176 554 -139 283
                    -538 314 -719 55 -145 -208 -73 -500 152 -615 l51 -25 0 44 c0 43 -1 44 -37
                    51 -51 9 -87 32 -108 67 -16 28 -16 31 -1 46 16 16 19 15 46 -18 25 -31 34
                    -35 77 -36 27 0 54 -4 61 -8 8 -5 12 -35 12 -86 0 -119 -24 -133 -133 -79
                    -172 87 -278 296 -248 489 6 41 24 102 40 135 55 118 183 225 310 261 65 18
                    178 17 242 -2z"
                />
              </g>
            </svg>
            <h3>GITHUB</h3>
          </a>

          <a
            className="about-icon"
            href="https://www.linkedin.com/in/redomic/"
            target="_blank"
            rel="noreferrer"
          >
            {/* LINKEDIN */}
            <svg
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              width="128.000000pt"
              height="128.000000pt"
              viewBox="0 0 128.000000 128.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              <g
                transform="translate(0.000000,128.000000) scale(0.100000,-0.100000)"
                fill="currentColor"
                stroke="none"
              >
                <path
                  d="M135 1145 l-25 -24 0 -481 0 -481 25 -24 24 -25 481 0 481 0 24 25
                    25 24 0 481 0 481 -25 24 -24 25 -481 0 -481 0 -24 -25z m260 -157 c84 -38 54
                    -158 -39 -158 -100 0 -121 128 -26 163 24 9 37 8 65 -5z m516 -234 c37 -19 76
                    -68 89 -112 5 -20 10 -110 10 -199 l0 -163 -79 0 -79 0 -4 153 c-4 181 -13
                    207 -76 207 -79 -1 -92 -32 -92 -214 l0 -146 -80 0 -80 0 0 240 0 240 80 0
                    c79 0 80 0 80 -26 l0 -25 35 27 c58 44 132 51 196 18z m-481 -234 l0 -240 -80
                    0 -80 0 0 240 0 240 80 0 80 0 0 -240z"
                />
              </g>
            </svg>
            <h3>LINKEDIN</h3>
          </a>

          <a
            className="about-icon"
            href="https://www.twitch.tv/redomic"
            target="_blank"
            rel="noreferrer"
          >
            {/* TWITCH */}
            <svg
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              width="128.000000pt"
              height="128.000000pt"
              viewBox="0 0 128.000000 128.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              <g
                transform="translate(0.000000,128.000000) scale(0.100000,-0.100000)"
                fill="currentColor"
                stroke="none"
              >
                <path
                  d="M161 1098 l-41 -103 0 -377 0 -378 120 0 120 0 0 -80 0 -80 78 0 77
                    0 80 80 80 80 100 0 100 0 143 143 142 142 0 338 0 337 -479 0 -479 0 -41
                    -102z m479 -338 l0 -160 -60 0 -60 0 0 160 0 160 60 0 60 0 0 -160z m280 0 l0
                    -160 -60 0 -60 0 0 160 0 160 60 0 60 0 0 -160z"
                />
              </g>
            </svg>
            <h3>TWITCH</h3>
          </a>

          <a
            className="about-icon"
            href="https://www.instagram.com/jones_xdd/"
            target="_blank"
            rel="noreferrer"
          >
            {/* INSTAGRAM */}
            <svg
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              width="128.000000pt"
              height="128.000000pt"
              viewBox="0 0 128.000000 128.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              <g
                transform="translate(0.000000,128.000000) scale(0.100000,-0.100000)"
                fill="currentColor"
                stroke="currentColor"
              >
                <path
                  d="M291 1155 c-96 -27 -141 -73 -167 -174 -21 -83 -16 -653 7 -716 20
                    -58 84 -118 144 -136 72 -20 658 -20 730 0 66 20 126 80 146 146 20 72 20 658
                    0 730 -18 60 -78 124 -136 144 -61 22 -649 26 -724 6z m614 -144 c22 -10 52
                    -31 67 -47 51 -55 56 -82 59 -319 3 -241 -1 -267 -59 -329 -57 -60 -84 -66
                    -332 -66 -248 0 -275 6 -332 66 -53 57 -58 84 -58 324 0 240 5 267 58 324 57
                    60 84 66 332 66 198 0 230 -3 265 -19z"
                />
                <path
                  d="M415 945 c-52 -19 -82 -54 -90 -108 -4 -23 -5 -126 -3 -227 3 -202
                    10 -229 65 -266 25 -17 49 -19 255 -19 213 0 228 1 255 21 57 42 63 68 63 294
                    0 226 -6 252 -63 294 -26 19 -44 21 -235 23 -161 2 -216 0 -247 -12z m467 -62
                    c10 -9 18 -23 18 -31 0 -18 -28 -52 -43 -52 -19 0 -47 33 -47 55 0 43 39 58
                    72 28z m-152 -58 c141 -72 154 -265 24 -354 -114 -79 -275 -17 -310 118 -43
                    166 136 313 286 236z"
                />
                <path
                  d="M573 750 c-85 -51 -81 -179 6 -225 61 -31 136 -11 171 48 70 114 -63
                    247 -177 177z"
                />
              </g>
            </svg>

            <h3>INSTAGRAM</h3>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
