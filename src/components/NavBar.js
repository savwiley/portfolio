import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleUp } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  return (
    <>
      <div className="navigation">
        <a href="#languages" alt="Languages & Programs">
          Languages
        </a>
        <a href="#projects" alt="Projects & Codes">
          Projects
        </a>
        <a href="#socials" alt="Social Media & Contact">
          Contact
        </a>
      </div>

      <div id="up">
        <a href="#top" alt="Go to Top of Page">
          <FontAwesomeIcon icon={faArrowAltCircleUp} />
        </a>
      </div>
    </>
  );
};

export default NavBar;
