import React, { useRef, useEffect } from "react";
import simpleIcons from "simple-icons";

const Languages = () => {
  const htmlIcon = useRef(simpleIcons.Get('html5').svg);
  const cssIcon = useRef(simpleIcons.Get('css3').svg);
  const jsIcon = useRef(simpleIcons.Get('javascript').svg);
  const phpIcon = useRef(simpleIcons.Get('php').svg);
  const webpackIcon = useRef(simpleIcons.Get('webpack').svg);
  const reactIcon = useRef(simpleIcons.Get('react').svg);
  const reactRIcon = useRef(simpleIcons.Get('reactrouter').svg);
  const firebaseIcon = useRef(simpleIcons.Get('firebase').svg);
  const herokuIcon = useRef(simpleIcons.Get('heroku').svg);
  const vscodeIcon = useRef(simpleIcons.Get('visualstudiocode').svg);
  const npmIcon = useRef(simpleIcons.Get('npm').svg);
  const yarnIcon = useRef(simpleIcons.Get('yarn').svg);
  const gitIcon = useRef(simpleIcons.Get('git').svg);
  const jasmineIcon = useRef(simpleIcons.Get('jasmine').svg);
  const jestIcon = useRef(simpleIcons.Get('jest').svg);
  
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

    //PLACEMENT
    //languages
    html.innerHTML = htmlIcon.current;
    css.innerHTML = cssIcon.current;
    js.innerHTML = jsIcon.current;
    php.innerHTML = phpIcon.current;
    //frontend
    webpack.innerHTML = webpackIcon.current;
    react.innerHTML = reactIcon.current;
    reactRoute.innerHTML = reactRIcon.current;
    //backend
    firebase.innerHTML = firebaseIcon.current;
    heroku.innerHTML = herokuIcon.current;
    //misc
    vscode.innerHTML = vscodeIcon.current;
    npm.innerHTML = npmIcon.current;
    yarn.innerHTML = yarnIcon.current;
    git.innerHTML = gitIcon.current;
    jasmine.innerHTML = jasmineIcon.current;
    jest.innerHTML = jestIcon.current;
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