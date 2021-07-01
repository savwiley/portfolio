import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap, faCode, faBirthdayCake, faRibbon, faKeyboard, faPenFancy } from '@fortawesome/free-solid-svg-icons'

const Extras = () => {

  return(
    <div className="experience interactive">

      <div className="half">
        <div>
          <div className="faIcon">
            <FontAwesomeIcon icon={faGraduationCap} className="exIcon" />
          </div>
          <div className="exBlurb">Where's Waldo-espue game with high scores table & three
            difficulties. TOP project. Where's Waldo-espue game with high scores
            table & three difficulties. TOP project. Where's Waldo-espue game
            with high scores table & three difficulties. TOP project. Where's
            Waldo-espue game with high scores table & three difficulties. TOP
            project. Where's Waldo-espue game with high scores table & three
            difficulties. TOP project. Where's Waldo-espue game with high scores
            table & three difficulties. TOP project.</div>
        </div>
        <div>
          <div className="faIcon">
            <FontAwesomeIcon icon={faBirthdayCake} className="exIcon" />
          </div>
          <div className="exBlurb"></div>
        </div>
        <div>
          <div className="faIcon">
            <FontAwesomeIcon icon={faKeyboard} className="exIcon" />
          </div>
          <div className="exBlurb"></div>
        </div>
      </div>

      <div className="half">
        <div>
          <div className="faIcon">
            <FontAwesomeIcon icon={faCode} className="exIcon" />
          </div>
          <div className="exBlurb">Where's Waldo-espue game with high scores table & three
            difficulties. TOP project. Where's Waldo-espue game with high scores
            table & three difficulties. TOP project. Where's Waldo-espue game
            with high scores table & three difficulties. TOP project. Where's
            Waldo-espue game with high scores table & three difficulties. TOP
            project. Where's Waldo-espue game with high scores table & three
            difficulties. TOP project. Where's Waldo-espue game with high scores
            table & three difficulties. TOP project.</div>
        </div>
        <div>
          <div className="faIcon">
            <FontAwesomeIcon icon={faRibbon} className="exIcon" />
          </div>
          <div className="exBlurb"></div>
        </div>
        <div>
          <div className="faIcon">
            <FontAwesomeIcon icon={faPenFancy} className="exIcon" />
          </div>
          <div className="exBlurb"></div>
        </div>
      </div>
    </div>
  )
}

export default Extras;


/**
 * education
 * top
 * killthecake
 * charity
 * typing speed?
 */