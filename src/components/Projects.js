import React, { useRef, useEffect } from "react";
import simpleIcons from "simple-icons";

const Projects = () => {
  const cssIcon = useRef(simpleIcons.Get('css3').svg);
  const jsIcon = useRef(simpleIcons.Get('javascript').svg);
  const reactIcon = useRef(simpleIcons.Get('react').svg);
  const reactRIcon = useRef(simpleIcons.Get('reactrouter').svg);
  const firebaseIcon = useRef(simpleIcons.Get('firebase').svg);
  const vscodeIcon = useRef(simpleIcons.Get('visualstudiocode').svg);
  const npmIcon = useRef(simpleIcons.Get('npm').svg);
  const gitIcon = useRef(simpleIcons.Get('git').svg);
  
  
  useEffect(() => {
    //DOMS
    //language
    //const html = document.querySelector(".html");
    const css = document.querySelector(".css");
    const js = document.querySelector(".js");
    //frontend
    //const webpack = document.querySelector(".webpack");
    const react = document.querySelector(".react");
    const reactRoute = document.querySelector(".reactroute");
    //backend
    const firebase = document.querySelector(".firebase");
    //misc
    const vscode = document.querySelector(".vscode");
    const npm = document.querySelector(".npm");
    //const yarn = document.querySelector(".yarn");
    const git = document.querySelector(".git");
    //const jest = document.querySelector(".jest");

    //PLACEMENT
    //languages
    //html.innerHTML = htmlIcon.svg;
    css.innerHTML = cssIcon.current;
    js.innerHTML = jsIcon.current;
    //frontend
    //webpack.innerHTML = webpackIcon.svg;
    react.innerHTML = reactIcon.current;
    reactRoute.innerHTML = reactRIcon.current;
    //backend
    firebase.innerHTML = firebaseIcon.current;
    //misc
    vscode.innerHTML = vscodeIcon.current;
    npm.innerHTML = npmIcon.current;
    //yarn.innerHTML = yarnIcon.svg;
    git.innerHTML = gitIcon.current;
    //jest.innerHTML = jestIcon.svg;
  }, [])

  return(
    <div className="projects">

      <div className="proj">
        <div className="pic">hi</div>
        <div className="desc">
          <div>Where's Waldo?</div>
          <div>Where's Waldo-espue game with high scores table & three difficulties. TOP project. Where's Waldo-espue game with high scores table & three difficulties. TOP project. Where's Waldo-espue game with high scores table & three difficulties. TOP project. Where's Waldo-espue game with high scores table & three difficulties. TOP project. Where's Waldo-espue game with high scores table & three difficulties. TOP project. Where's Waldo-espue game with high scores table & three difficulties. TOP project.</div>
          <div>
            <span className="css"></span>
            <span className="js"></span>
            <span className="react"></span>
            <span className="reactroute"></span>
            <span className="firebase"></span>
            <span className="vscode"></span>
            <span className="npm"></span>
            <span className="git"></span>
          </div>
          <div>
            <a href="https://github.com/savwiley/waldo">GitHub</a>
            <a href="https://waldo-9e96c.web.app/">Live Preview</a>
          </div>
        </div>
      </div>

      <div className="proj">
      <div className="desc">
          <div>Where's Waldo?</div>
          <div>Where's Waldo-espue game with high scores table & three difficulties. TOP project. Where's Waldo-espue game with high scores table & three difficulties. TOP project. Where's Waldo-espue game with high scores table & three difficulties. TOP project. Where's Waldo-espue game with high scores table & three difficulties. TOP project. Where's Waldo-espue game with high scores table & three difficulties. TOP project. Where's Waldo-espue game with high scores table & three difficulties. TOP project.</div>
          <div>
            <span className="css"></span>
            <span className="js"></span>
            <span className="react"></span>
            <span className="reactroute"></span>
            <span className="firebase"></span>
            <span className="vscode"></span>
            <span className="npm"></span>
            <span className="git"></span>
          </div>
          <div>
            <a href="https://github.com/savwiley/waldo">GitHub</a>
            <a href="https://waldo-9e96c.web.app/">Live Preview</a>
          </div>
        </div>
        <div className="pic">hey</div>
      </div>

    </div>
  )
}

export default Projects;