import React, { useEffect } from "react";
import simpleIcons from "simple-icons";

const Languages = () => {
  
  useEffect(() => {
    //DOMS
    //language
    const html = document.querySelector("#html");
    const css = document.querySelector("#css");
    const js = document.querySelector("#js");
    const php = document.querySelector("#php");
    //frontend
    const webpack = document.querySelector("#webpack");
    const react = document.querySelector("#react");
    const reactRoute = document.querySelector("#reactroute");
    //backend
    const firebase = document.querySelector("#firebase");
    const heroku = document.querySelector("#heroku");
    //misc
    const vscode = document.querySelector("#vscode");
    const npm = document.querySelector("#npm");
    const yarn = document.querySelector("#yarn");
    const git = document.querySelector("#git");
    const jasmine = document.querySelector("#jasmine");
    const jest = document.querySelector("#jest");

    //ICONS
    //language
    const htmlIcon = simpleIcons.Get('html5');
    const cssIcon = simpleIcons.Get('css3');
    const jsIcon = simpleIcons.Get('javascript');
    const phpIcon = simpleIcons.Get('php');
    //frontend
    const webpackIcon = simpleIcons.Get('webpack');
    const reactIcon = simpleIcons.Get('react');
    const reactRIcon = simpleIcons.Get('reactrouter');
    //backend
    const firebaseIcon = simpleIcons.Get('firebase');
    const herokuIcon = simpleIcons.Get('heroku');
    //misc
    const vscodeIcon = simpleIcons.Get('visualstudiocode');
    const npmIcon = simpleIcons.Get('npm');
    const yarnIcon = simpleIcons.Get('yarn');
    const gitIcon = simpleIcons.Get('git');
    const jasmineIcon = simpleIcons.Get('jasmine');
    const jestIcon = simpleIcons.Get('jest');

    //PLACEMENT
    //languages
    html.innerHTML = htmlIcon.svg;
    css.innerHTML = cssIcon.svg;
    js.innerHTML = jsIcon.svg;
    php.innerHTML = phpIcon.svg;
    //frontend
    webpack.innerHTML = webpackIcon.svg;
    react.innerHTML = reactIcon.svg;
    reactRoute.innerHTML = reactRIcon.svg;
    //backend
    firebase.innerHTML = firebaseIcon.svg;
    heroku.innerHTML = herokuIcon.svg;
    //misc
    vscode.innerHTML = vscodeIcon.svg;
    npm.innerHTML = npmIcon.svg;
    yarn.innerHTML = yarnIcon.svg;
    git.innerHTML = gitIcon.svg;
    jasmine.innerHTML = jasmineIcon.svg;
    jest.innerHTML = jestIcon.svg;
  })


  return(
    <div className="languages interactive">

      <div className="sect">Languages</div>
      <div className="sectDiv">
        <div id="html" data-tip="HTML5"></div>
        <div id="css" data-tip="CSS3"></div>
        <div id="js" data-tip="JavaScript"></div>
        <div id="php" data-tip="PHP"></div>
      </div>

      <div className="sect">Front-End</div>
      <div className="sectDiv">
        <div id="webpack" data-tip="webpack"></div>
        <div id="react" data-tip="React"></div>
        <div id="reactroute" data-tip="React-Router"></div>
      </div>

      <div className="sect">Back-End</div>
      <div className="sectDiv">
        <div id="firebase" data-tip="Firebase"></div>
        <div id="heroku" data-tip="Heroku"></div>
      </div>

      <div className="sect">Misc.</div>
      <div className="sectDiv">
        <div id="vscode" data-tip="VSCode"></div>
        <div id="npm" data-tip="npm"></div>
        <div id="yarn" data-tip="yarn"></div>
        <div id="git" data-tip="Git"></div>
        <div id="jasmine" data-tip="Jasmine"></div>
        <div id="jest" data-tip="Jest"></div>
      </div>
    </div>
  )
}

export default Languages;