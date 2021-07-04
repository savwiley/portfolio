import React, { useRef } from "react";
import simpleIcons from "simple-icons";
import DOMPurify from "dompurify";

const Languages = () => {
  const htmlIcon = useRef(simpleIcons.Get("html5").svg);
  const cssIcon = useRef(simpleIcons.Get("css3").svg);
  const jsIcon = useRef(simpleIcons.Get("javascript").svg);
  const phpIcon = useRef(simpleIcons.Get("php").svg);
  const webpackIcon = useRef(simpleIcons.Get("webpack").svg);
  const reactIcon = useRef(simpleIcons.Get("react").svg);
  const reactRIcon = useRef(simpleIcons.Get("reactrouter").svg);
  const firebaseIcon = useRef(simpleIcons.Get("firebase").svg);
  const herokuIcon = useRef(simpleIcons.Get("heroku").svg);
  const vscodeIcon = useRef(simpleIcons.Get("visualstudiocode").svg);
  const npmIcon = useRef(simpleIcons.Get("npm").svg);
  const yarnIcon = useRef(simpleIcons.Get("yarn").svg);
  const gitIcon = useRef(simpleIcons.Get("git").svg);
  const jasmineIcon = useRef(simpleIcons.Get("jasmine").svg);
  const jestIcon = useRef(simpleIcons.Get("jest").svg);
  const prettierIcon = useRef(simpleIcons.Get("prettier").svg);
  const eslintIcon = useRef(simpleIcons.Get("eslint").svg);
  const babelIcon = useRef(simpleIcons.Get("babel").svg);
  const nodeIcon = useRef(simpleIcons.Get("nodedotjs").svg);

  return (
    <div className="languages interactive" id="languages">
      <div>
        <div className="sect">Languages</div>
        <div className="sectDiv">
          <div
            id="html"
            data-tip="HTML5"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(htmlIcon.current),
            }}
            alt="HTML5"
          />
          <div
            id="css"
            data-tip="CSS3"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(cssIcon.current),
            }}
            alt="CSS3"
          />
          <div
            id="js"
            data-tip="JavaScript"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(jsIcon.current),
            }}
            alt="JavaScript"
          />
          <div
            id="php"
            data-tip="PHP"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(phpIcon.current),
            }}
            alt="PHP"
          />
        </div>

        <div className="sect">Front-End</div>
        <div className="sectDiv">
          <div
            id="webpack"
            data-tip="webpack"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(webpackIcon.current),
            }}
            alt="webpack"
          />
          <div
            id="react"
            data-tip="React"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(reactIcon.current),
            }}
            alt="React"
          />
          <div
            id="reactroute"
            data-tip="React-Router"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(reactRIcon.current),
            }}
            alt="React-Router"
          />
          <div
            id="node"
            data-tip="Node.JS"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(nodeIcon.current),
            }}
            alt="Node.JS"
          />
        </div>

        <div className="sect">Back-End</div>
        <div className="sectDiv">
          <div
            id="firebase"
            data-tip="Firebase"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(firebaseIcon.current),
            }}
            alt="Firebase"
          />
          <div
            id="heroku"
            data-tip="Heroku"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(herokuIcon.current),
            }}
            alt="Heroku"
          />
        </div>
      </div>

      <div>
        <div className="sect">Testing</div>
        <div className="sectDiv">
          <div
            id="jasmine"
            data-tip="Jasmine"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(jasmineIcon.current),
            }}
            alt="Jasmine"
          />
          <div
            id="jest"
            data-tip="Jest"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(jestIcon.current),
            }}
            alt="Jest"
          />
        </div>

        <div className="sect">Formating</div>
        <div className="sectDiv">
          <div
            id="prettier"
            data-tip="Prettier"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(prettierIcon.current),
            }}
            alt="Prettier"
          />
          <div
            id="eslint"
            data-tip="ESLint"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(eslintIcon.current),
            }}
            alt="ESLint"
          />
        </div>

        <div className="sect">Misc.</div>
        <div className="sectDiv">
          <div
            id="vscode"
            data-tip="Visual Studio Code"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(vscodeIcon.current),
            }}
            alt="Visual Studio Code"
          />
          <div
            id="npm"
            data-tip="npm"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(npmIcon.current),
            }}
            alt="npm"
          />
          <div
            id="yarn"
            data-tip="yarn"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(yarnIcon.current),
            }}
            alt="yarn"
          />
          <div
            id="babel"
            data-tip="Babel"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(babelIcon.current),
            }}
            alt="Babel"
          />
          <div
            id="git"
            data-tip="Git"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(gitIcon.current),
            }}
            alt="Git"
          />
        </div>
      </div>
    </div>
  );
};

export default Languages;
