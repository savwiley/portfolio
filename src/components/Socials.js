import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCodepen, faTwitter, faWordpress, faGithub, faLinkedin, faGithubAlt } from "@fortawesome/free-brands-svg-icons";
import { faCoffee, faArchive } from "@fortawesome/free-solid-svg-icons";

const Socials = () => {

  return(
    <>
      <div id="socials">
        <a href="https://codepen.io/savwiley" data-tip="CodePen">
          <FontAwesomeIcon icon={faCodepen} />
        </a>
        <a href="https://ko-fi.com/linatrinch" data-tip="Ko-fi">
          <FontAwesomeIcon icon={faCoffee} />
        </a>
        <a href="https://twitter.com/sav_swiley" data-tip="Twitter">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="https://killthecake.dreamwidth.org/" data-tip="Dreamwidth">
          <FontAwesomeIcon icon={faArchive} />
        </a>
        <a href="https://ergosumwriting.wordpress.com/" data-tip="WordPress">
          <FontAwesomeIcon icon={faWordpress} />
        </a>
        <a href="https://github.com/savwiley" data-tip="GitHub">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://www.linkedin.com/in/savwiley/" data-tip="LinkedIn">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>

      <div id="footer">
        <a href="https://github.com/savwiley/portfolio" data-tip="See the Code That Built This Site">
          <FontAwesomeIcon icon={faGithubAlt} />
        </a>
      </div>
    </>
  )
}

export default Socials;

/**SOCIALS
 * codepen
 * kofi
 * twitter
 * dreamwidth
 * github
 * https://ergosumwriting.wordpress.com/ */