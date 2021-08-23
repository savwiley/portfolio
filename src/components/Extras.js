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
    <div className="experience interactive" id="about">
      <div className="half">
        <div>
          <div className="faIcon" alt="Education">
            <FontAwesomeIcon icon={faGraduationCap} className="exIcon" />
          </div>
          <div className="exBlurb">
            <h1>MA in English</h1>
            <span>
              BA - Louisiana State University of Alexandria
              <br />
              MA - Southern New Hampshire University
            </span>
          </div>
        </div>
        <div>
          <div className="faIcon" alt="Dreamwidth Community">
            <FontAwesomeIcon icon={faBirthdayCake} className="exIcon" />
          </div>
          <div className="exBlurb">
            <h1>Free CSS</h1>
            <span>
              My oddly named <a href="https://killthecake.dreamwidth.org/">Dreamwidth community</a>, housing a library of CSS works for free use, from blog layouts to image displays.
            </span>
          </div>
        </div>
        <div>
          <div className="faIcon" alt="Typing Speed">
            <FontAwesomeIcon icon={faKeyboard} className="exIcon" />
          </div>
          <div className="exBlurb">
            <h1>69 WPM</h1>
            <span>Typing speed as of 08/2021</span>
          </div>
        </div>
      </div>

      <div className="half">
        <div>
          <div className="faIcon" alt="Self-Taught Learner">
            <FontAwesomeIcon icon={faCode} className="exIcon" />
          </div>
          <div className="exBlurb">
            <h1>Self-Taught</h1>
            <span>
              Followed my passion for coding with <a href="https://www.theodinproject.com/dashboard">The Odin Project</a>, where I learned JavaScript & much more.
            </span>
          </div>
        </div>
        <div>
          <div className="faIcon" alt="Charity">
            <FontAwesomeIcon icon={faRibbon} className="exIcon" />
          </div>
          <div className="exBlurb">
            <h1>Charity Drives</h1>
            <span>
              Hosted a fundraiser where I traded my coding skills for charity. All proceeds went to the <a href="https://blackaids.org/">Black AIDS Institute</a>.
            </span>
          </div>
        </div>
        <div>
          <div className="faIcon" alt="Writing">
            <FontAwesomeIcon icon={faPenFancy} className="exIcon" />
          </div>
          <div className="exBlurb">
            <h1>Written Works</h1>
            <span>
              My writing journey has included literary journals, newspapers, unpublished novels, & offerings of help to new writers.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Extras;
