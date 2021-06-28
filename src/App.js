import React from "react";
import ReactTooltip from "react-tooltip";
import Header from "./components/Header.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons'

function App() {

  return (
    <>
      <ReactTooltip 
        place="bottom" 
        backgroundColor="#036656" 
        arrowColor="transparent" />
      <Header />

      <div className="blurb">
        <div id="piece">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lacinia diam ultrices malesuada lobortis. Proin convallis iaculis lorem non dignissim. Phasellus tristique aliquam consequat. Donec vulputate sem id hendrerit finibus. Aenean imperdiet sagittis risus quis lacinia. Nullam sed pulvinar lorem. Mauris lacinia sit amet dui id pulvinar. Praesent tristique volutpat maximus. Nullam sed diam augue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris tincidunt viverra mi sed suscipit.
        </div>

        <a href="https://github.com/savwiley" alt="Github" data-tip="Github">
          <FontAwesomeIcon icon={faGithub} className="git" />
        </a>
      </div>
    </>
  );
}

export default App;
