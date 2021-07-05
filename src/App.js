import React, { useEffect } from "react";
import ReactTooltip from "react-tooltip";
import NavBar from "./components/NavBar.js";
import Header from "./components/Header.js";
import Languages from "./components/Languages.js";
import Projects from "./components/Projects.js";
import Extras from "./components/Extras.js";
import Socials from "./components/Socials.js";
import Footer from "./components/Footer.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function App() {
  console.log(
    "This site was made with ReactJS & is hosted with Firebase. You can find all of the files at:"
  );
  console.log("https://github.com/savwiley/portfolio");
  console.log("(っ ᵔ︠ ▿ ︡ᵔ)っ🎔 Thanks for visiting!");

  //gradient moves with mouse
  useEffect(() => {
    const interact = document.querySelectorAll(".interactive");
    interact.forEach((e) => {
      e.addEventListener("mousemove", (i) => {
        const X = (i.clientX / window.innerWidth) * 100;
        const Y = (i.clientY / window.innerHeight) * 100;
        e.style.background = `url("https://raw.githubusercontent.com/savwiley/portfolio/master/src/images/rocky-wall.png") fixed, radial-gradient(at ${X}% ${Y}%, #018f77, #036656)`;
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

      <NavBar />

      <div className="blurb">
        <div id="piece">
          Hello there! My name, as you can likely guess, is Savannaha Wiley. I live in Louisiana with my two dogs and cat: Hank, Sadie, & Mini respectively. I finished college with a <b>Master's degree in 2017</b> & have worked in Technical Writing ever since.
          <br />
          <br />
          As my writings became more focused <b>software & coding</b>, I got an itch to learn more, prompting me to start with CSS. Once the pandemic happened and work slowed to a grinding halt, I jumped into the coding life practically face first & haven't regretted a second of it. Right now, other than learning as many coding languages as I can, my goal is to make the career change into <b>Web Development</b>.
          <br />
          <br />
          When I'm not coding, I enjoy playing FPS games with my mom, slogging through the entire Star Trek franchise with my best friend, playing TCGs with friends online, and informing my dog that he's a good boy. If you're interested in getting to know me better, you can check out my GitHub at the link below or look for me on <a href="#about">social media</a>. Regardless, I'm glad you stopped by!
        </div>

        <a href="https://github.com/savwiley" alt="Github" data-tip="Github">
          <FontAwesomeIcon icon={faGithub} className="github" />
        </a>
      </div>

      <Languages />

      <Projects />

      <Extras />

      <Socials />

      <Footer />
    </>
  );
}

export default App;


/**
 * ideas from Scarce Xrul
 * 
 * - contact form at bottom to send me an email directly from my site
 * - back btn at bottom of page
 * - hamburger menu on mobile
 * - change about/contact link
 * x change 80 to 50 on blurb
 * x remove ko-fi
 */