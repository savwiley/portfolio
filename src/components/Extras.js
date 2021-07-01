import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faCode,
  faBirthdayCake,
  faRibbon,
  faKeyboard,
  faPenFancy,
} from "@fortawesome/free-solid-svg-icons";

const Extras = () => {
  return (
    <div className="experience interactive">
      <div className="half">
        <div>
          <div className="faIcon">
            <FontAwesomeIcon icon={faGraduationCap} className="exIcon" />
          </div>
          <div className="exBlurb">Education</div>
        </div>
        <div>
          <div className="faIcon">
            <FontAwesomeIcon icon={faBirthdayCake} className="exIcon" />
          </div>
          <div className="exBlurb">KillTheCake</div>
        </div>
        <div>
          <div className="faIcon">
            <FontAwesomeIcon icon={faKeyboard} className="exIcon" />
          </div>
          <div className="exBlurb">Typing?</div>
        </div>
      </div>

      <div className="half">
        <div>
          <div className="faIcon">
            <FontAwesomeIcon icon={faCode} className="exIcon" />
          </div>
          <div className="exBlurb">TOP</div>
        </div>
        <div>
          <div className="faIcon">
            <FontAwesomeIcon icon={faRibbon} className="exIcon" />
          </div>
          <div className="exBlurb">Charity</div>
        </div>
        <div>
          <div className="faIcon">
            <FontAwesomeIcon icon={faPenFancy} className="exIcon" />
          </div>
          <div className="exBlurb">Writing?</div>
        </div>
      </div>
    </div>
  );
};

export default Extras;

/**
 * should i put more info in a data-tip?
 */
