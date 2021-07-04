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

  //mountains move
  useEffect(() => {
    //selectors
    const zero = document.querySelector(".spzero");
    const one = document.querySelector(".spone");
    const two = document.querySelector(".sptwo");
    const three = document.querySelector(".spthree");

    window.addEventListener("scroll", () => {
      zero.style.left = `${-(window.pageYOffset) + 100}px`;
      one.style.left = `${-(window.pageYOffset) + -350}px`;
      two.style.left = `${window.pageYOffset + 300}px`;
      three.style.left = `${window.pageYOffset + 550}px`;
    })
  })

  return (
    <div className="header interactive" id="top">

      <div className="spike spzero" />
      <div className="spike sptwo" />
      <div className="spike spone" />
      <div className="spike spthree" />

      <div className="headerInner">
        <div id="name">Savannaha Wiley</div>
        <div id="webD"></div>
      </div>
      <FontAwesomeIcon icon={faChevronDown} className="arrowDwn" />
    </div>
  );
};

export default Header;