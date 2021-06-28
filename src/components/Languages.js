import React from "react";
import simpleIcons from "simple-icons";

const Languages = () => {
  const test = document.querySelector("#test");
  const icon = simpleIcons.Get('3m');
  test.textContent = icon;

  //simple icons not working


  return(
    <div className="languages interactive">
      <div className="sect">Languages</div>
      <div id="test"></div>
    </div>
  )
}

export default Languages;

/**
 * LANGUAGES
 * html, css, js, jsx, php
 * 
 * FRONTEND
 * webpack, react
 * 
 * BACKEND
 * firebase, heroku?
 * 
 * MISC
 * vscode, npm, yarn, git, jasmine, jest
 */