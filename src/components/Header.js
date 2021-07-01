import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  //profession title changes
  useEffect(() => {
    const profession = document.querySelector("#webD");
    profession.textContent = "web developer";
    //consider changing to case/switch
    const change = () => {
      let content = profession.textContent;
      if (content === "web developer") {
        profession.textContent = "writer";
      } else if (content === "writer") {
        profession.textContent = "editor";
      } else if (content === "editor") {
        profession.textContent = "ui/ux designer";
      } else if (content === "ui/ux designer") {
        profession.textContent = "web developer";
      }
    };
    setInterval(change, 1000);
  });

  return (
    <div className="header interactive" id="top">
      <div className="headerInner">
        <div id="name">Savannaha Wiley</div>
        <div id="webD"></div>
      </div>
      <FontAwesomeIcon icon={faChevronDown} className="arrowDwn" />
    </div>
  );
};

export default Header;
