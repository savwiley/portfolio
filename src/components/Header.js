import React, { useEffect } from "react";

const Header = () => {

  //header gradient moves with mouse
  useEffect(() => {
    const header = document.querySelector(".header");
    header.addEventListener("mousemove", (e) => {
      const X = e.clientX / window.innerWidth * 100;
      const Y = e.clientY / window.innerHeight * 100;
      header.style.background = `radial-gradient(at ${X}% ${Y}%, #0ec7a8, #036656)`;
    });
  })

  //profession title changes
  useEffect(() => {
    const profession = document.querySelector("#webD");
    profession.textContent = "Web Developer";
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
    <div className="header">
      <div className="headerInner">
        <div id="name">Savannaha Wiley</div>
        <div id="webD"></div>
      </div>
    </div>
  )
}

export default Header;