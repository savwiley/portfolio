import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCodepen,
  faTwitter,
  faWordpress,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faBirthdayCake } from "@fortawesome/free-solid-svg-icons";

const Socials = () => {
  return (
    <>
      <div id="socials">
        <a href="https://codepen.io/savwiley" data-tip="CodePen" alt="CodePen">
          <FontAwesomeIcon icon={faCodepen} />
        </a>
        <a
          href="https://twitter.com/sav_swiley"
          data-tip="Twitter"
          alt="Twitter"
        >
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a
          href="https://killthecake.dreamwidth.org/"
          data-tip="Dreamwidth"
          alt="Dreamwidth"
        >
          <FontAwesomeIcon icon={faBirthdayCake} />
        </a>
        <a
          href="https://ergosumwriting.wordpress.com/"
          data-tip="WordPress"
          alt="WordPress"
        >
          <FontAwesomeIcon icon={faWordpress} />
        </a>
        <a href="https://github.com/savwiley" data-tip="GitHub" alt="GitHub">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          href="https://www.linkedin.com/in/savwiley/"
          data-tip="LinkedIn"
          alt="LinkedIn"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
    </>
  );
};

export default Socials;
