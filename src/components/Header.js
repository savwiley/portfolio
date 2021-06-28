import React, { useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

const Header = () => {

  //profession title changes
  useEffect(() => {
    const profession = document.querySelector("#webD");
    profession.textContent = "Web Developer";
    //consider changing to case/switch
    const change = () => {
      let content = profession.textContent;
      if (content === "Web Developer") {
        profession.textContent = "Writer";
      } else if (content === "Writer") {
        profession.textContent = "Editor";
      } else if (content === "Editor") {
        profession.textContent = "UI/UX Designer";
      } else if (content === "UI/UX Designer") {
        profession.textContent = "Web Developer";
      }
    }
    setInterval(change, 1000);
  })

  return (
    <div className="header interactive">
      <div className="headerInner">
        <div id="name">Savannaha Wiley</div>
        <div id="webD"></div>
      </div>
      <FontAwesomeIcon icon={faChevronDown} className="arrowDwn" />
    </div>
  )
}

export default Header;