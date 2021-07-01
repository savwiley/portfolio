import React, { useEffect } from "react";
import ReactTooltip from "react-tooltip";
import Header from "./components/Header.js";
import Languages from "./components/Languages.js";
import Projects from "./components/Projects.js";
import Extras from "./components/Extras.js";
import Socials from "./components/Socials.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function App() {
  console.log("This site was made with ReactJS & is hosted with Heroku. You can find all of the files at:");
  console.log("https://github.com/savwiley/portfolio");
  console.log("(っ ᵔ︠ ▿ ︡ᵔ)っ🎔 Thanks for visiting!");

  //gradient moves with mouse
  useEffect(() => {
    const interact = document.querySelectorAll(".interactive");
    interact.forEach((e) => {
      e.addEventListener("mousemove", (i) => {
        const X = (i.clientX / window.innerWidth) * 100;
        const Y = (i.clientY / window.innerHeight) * 100;
        e.style.background = `url("https://www.transparenttextures.com/patterns/escheresque-dark.png") fixed, radial-gradient(at ${X}% ${Y}%, #0ec7a8, #036656)`;
      });
    });
  });

  return (
    <>
      <ReactTooltip
        backgroundColor="#036656"
        arrowColor="transparent"
        place="bottom"
      />

      <Header />

      <div className="blurb">
        <div id="piece">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          lacinia diam ultrices malesuada lobortis. Proin convallis iaculis
          lorem non dignissim. Phasellus tristique aliquam consequat. Donec
          vulputate sem id hendrerit finibus. Aenean imperdiet sagittis risus
          quis lacinia. Nullam sed pulvinar lorem. Mauris lacinia sit amet dui
          id pulvinar. Praesent tristique volutpat maximus. Nullam sed diam
          augue. Class aptent taciti sociosqu ad litora torquent per conubia
          nostra, per inceptos himenaeos. Mauris tincidunt viverra mi sed
          suscipit.
        </div>

        <a href="https://github.com/savwiley" alt="Github" data-tip="Github">
          <FontAwesomeIcon icon={faGithub} className="github" />
        </a>
      </div>

      <Languages />

      <Projects />

      <Extras />

      <Socials />
    </>
  );
}

export default App;


/**
 * - NAVBAR
 * - download the desired bg
 * - README
 * - create ALT for all links & images
 * - fill in blurbs
 */