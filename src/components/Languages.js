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

  return (
    <div className="languages interactive">
      <div>
        <div className="sect">Languages</div>
        <div className="sectDiv">
          <div
            id="html"
            data-tip="HTML5"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(htmlIcon.current),
            }}
          />
          <div
            id="css"
            data-tip="CSS3"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(cssIcon.current),
            }}
          />
          <div
            id="js"
            data-tip="JavaScript"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(jsIcon.current),
            }}
          />
          <div
            id="php"
            data-tip="PHP"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(phpIcon.current),
            }}
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
          />
          <div
            id="react"
            data-tip="React"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(reactIcon.current),
            }}
          />
          <div
            id="reactroute"
            data-tip="React-Router"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(reactRIcon.current),
            }}
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
          />
          <div
            id="heroku"
            data-tip="Heroku"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(herokuIcon.current),
            }}
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
          />
          <div
            id="jest"
            data-tip="Jest"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(jestIcon.current),
            }}
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
          />
          <div
            id="eslint"
            data-tip="ESLint"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(eslintIcon.current),
            }}
          />
        </div>

        <div className="sect">Misc.</div>
        <div className="sectDiv">
          <div
            id="vscode"
            data-tip="VSCode"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(vscodeIcon.current),
            }}
          />
          <div
            id="npm"
            data-tip="npm"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(npmIcon.current),
            }}
          />
          <div
            id="yarn"
            data-tip="yarn"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(yarnIcon.current),
            }}
          />
          <div
            id="git"
            data-tip="Git"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(gitIcon.current),
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Languages;
