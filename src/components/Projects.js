import React, { useRef } from "react";
import simpleIcons from "simple-icons";
import DOMPurify from "dompurify";

const Projects = () => {
  const jsIcon = useRef(simpleIcons.Get("javascript").svg);
  const webpackIcon = useRef(simpleIcons.Get("webpack").svg);
  const reactIcon = useRef(simpleIcons.Get("react").svg);
  const reactRIcon = useRef(simpleIcons.Get("reactrouter").svg);
  const firebaseIcon = useRef(simpleIcons.Get("firebase").svg);
  const jestIcon = useRef(simpleIcons.Get("jest").svg);

  return (
    <div className="projects">
      <div className="proj waldo">
        <div className="pic" alt="GIF of Where's Waldo-esque game featuring various pop culture characters."></div>
        <div className="desc">
          <div>Where's Waldo?</div>
          <div>
            Where's Waldo-espue game with high scores table & three
            difficulties. TOP project. Where's Waldo-espue game with high scores
            table & three difficulties. TOP project. Where's Waldo-espue game
            with high scores table & three difficulties. TOP project. Where's
            Waldo-espue game with high scores table & three difficulties. TOP
            project. Where's Waldo-espue game with high scores table & three
            difficulties. TOP project. Where's Waldo-espue game with high scores
            table & three difficulties. TOP project.
          </div>
          <div>
            <span
              className="js"
              data-tip="JavaScript"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(jsIcon.current),
              }}
              alt="JavaScript"
            />
            <span
              className="react"
              data-tip="React"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(reactIcon.current),
              }}
              alt="React"
            />
            <span
              className="reactroute"
              data-tip="React-Router"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(reactRIcon.current),
              }}
              alt="React-Router"
            />
            <span
              className="firebase"
              data-tip="Firebase"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(firebaseIcon.current),
              }}
              alt="Firebase"
            />
          </div>
          <div>
            <a href="https://github.com/savwiley/waldo" alt="GitHub Repo">GitHub</a>
            <a href="https://waldo-9e96c.web.app/" alt="Preview Where's Waldo?">Live Preview</a>
          </div>
        </div>
      </div>

      <div className="proj battleship">
        <div className="desc">
          <div>Battleship</div>
          <div>
            Where's Waldo-espue game with high scores table & three
            difficulties. TOP project. Where's Waldo-espue game with high scores
            table & three difficulties. TOP project. Where's Waldo-espue game
            with high scores table & three difficulties. TOP project. Where's
            Waldo-espue game with high scores table & three difficulties. TOP
            project. Where's Waldo-espue game with high scores table & three
            difficulties. TOP project. Where's Waldo-espue game with high scores
            table & three difficulties. TOP project.
          </div>
          <div>
            <span
              className="js"
              data-tip="JavaScript"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(jsIcon.current),
              }}
              alt="JavaScript"
            />
            <span
              className="react"
              data-tip="React"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(reactIcon.current),
              }}
              alt="React"
            />
            <span
              className="reactroute"
              data-tip="React-Router"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(reactRIcon.current),
              }}
              alt="React-Router"
            />
            <span
              className="jest"
              data-tip="Jest"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(jestIcon.current),
              }}
              alt="Jest"
            />
          </div>
          <div>
            <a href="https://github.com/savwiley/battleship" alt="GitHub Repo">GitHub</a>
            <a href="https://savwiley.github.io/battleship/" alt="Preview Battleship">Live Preview</a>
          </div>
        </div>
        <div className="pic" alt="GIF of a Battleship game showcasing placement of ships & battle against an AI opponent."></div>
      </div>

      <div className="proj cart">
        <div className="pic" alt="GIF of a fake retail site featuring a filter of product categories, individual item pages, and an interactive cart."></div>
        <div className="desc">
          <div>Mock Retail Site</div>
          <div>
            Where's Waldo-espue game with high scores table & three
            difficulties. TOP project. Where's Waldo-espue game with high scores
            table & three difficulties. TOP project. Where's Waldo-espue game
            with high scores table & three difficulties. TOP project. Where's
            Waldo-espue game with high scores table & three difficulties. TOP
            project. Where's Waldo-espue game with high scores table & three
            difficulties. TOP project. Where's Waldo-espue game with high scores
            table & three difficulties. TOP project.
          </div>
          <div>
            <span
              className="js"
              data-tip="JavaScript"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(jsIcon.current),
              }}
              alt="JavaScript"
            />
            <span
              className="react"
              data-tip="React"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(reactIcon.current),
              }}
              alt="React"
            />
            <span
              className="reactroute"
              data-tip="React-Router"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(reactRIcon.current),
              }}
              alt="React-Router"
            />
          </div>
          <div>
            <a href="https://github.com/savwiley/shopping-cart" alt="GitHub Repo">GitHub</a>
            <a href="https://savwiley.github.io/shopping-cart/" alt="Preview Mock Retail Site">Live Preview</a>
          </div>
        </div>
      </div>

      <div className="proj memory">
        <div className="desc">
          <div>Memory Game</div>
          <div>
            Where's Waldo-espue game with high scores table & three
            difficulties. TOP project. Where's Waldo-espue game with high scores
            table & three difficulties. TOP project. Where's Waldo-espue game
            with high scores table & three difficulties. TOP project. Where's
            Waldo-espue game with high scores table & three difficulties. TOP
            project. Where's Waldo-espue game with high scores table & three
            difficulties. TOP project. Where's Waldo-espue game with high scores
            table & three difficulties. TOP project.
          </div>
          <div>
            <span
              className="js"
              data-tip="JavaScript"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(jsIcon.current),
              }}
              alt="JavaScript"
            />
            <span
              className="react"
              data-tip="React"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(reactIcon.current),
              }}
              alt="React"
            />
          </div>
          <div>
            <a href="https://github.com/savwiley/memoryCard" alt="GitHub Repo">GitHub</a>
            <a href="https://savwiley.github.io/memoryCard/" alt="Preview Memory Game">Live Preview</a>
          </div>
        </div>
        <div className="pic" alt="GIF of a MCU poster selecting game with a high score system."></div>
      </div>

      <div className="proj library">
        <div className="pic" alt="GIF of a universal library featuring user input & community interaction."></div>
        <div className="desc">
          <div>The Library</div>
          <div>
            Where's Waldo-espue game with high scores table & three
            difficulties. TOP project. Where's Waldo-espue game with high scores
            table & three difficulties. TOP project. Where's Waldo-espue game
            with high scores table & three difficulties. TOP project. Where's
            Waldo-espue game with high scores table & three difficulties. TOP
            project. Where's Waldo-espue game with high scores table & three
            difficulties. TOP project. Where's Waldo-espue game with high scores
            table & three difficulties. TOP project.
          </div>
          <div>
            <span
              className="js"
              data-tip="JavaScript"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(jsIcon.current),
              }}
              alt="JavaScript"
            />
            <span
              className="webpack"
              data-tip="webpack"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(webpackIcon.current),
              }}
              alt="webpack"
            />
            <span
              className="firebase"
              data-tip="Firebase"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(firebaseIcon.current),
              }}
              alt="Firebase"
            />
          </div>
          <div>
            <a href="https://github.com/savwiley/libraryProject" alt="GitHub Repo">GitHub</a>
            <a href="https://savwiley.github.io/libraryProject/dist/" alt="Preview the Library">
              Live Preview
            </a>
          </div>
        </div>
      </div>

      <div className="proj weather">
        <div className="desc">
          <div>Weather App</div>
          <div>
            Where's Waldo-espue game with high scores table & three
            difficulties. TOP project. Where's Waldo-espue game with high scores
            table & three difficulties. TOP project. Where's Waldo-espue game
            with high scores table & three difficulties. TOP project. Where's
            Waldo-espue game with high scores table & three difficulties. TOP
            project. Where's Waldo-espue game with high scores table & three
            difficulties. TOP project. Where's Waldo-espue game with high scores
            table & three difficulties. TOP project.
          </div>
          <div>
            <span
              className="js"
              data-tip="JavaScript"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(jsIcon.current),
              }}
              alt="JavaScript"
            />
            <span
              className="webpack"
              data-tip="webpack"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(webpackIcon.current),
              }}
              alt="webpack"
            />
          </div>
          <div>
            <a href="https://github.com/savwiley/weather" alt="GitHub Repo">GitHub</a>
            <a href="https://savwiley.github.io/weather/dist/" alt="Preview Weather App">Live Preview</a>
          </div>
        </div>
        <div className="pic" alt="GIF of a working weather app featuring user input to any location, accurate temperatures, weather reports, & icons of predicted weather."></div>
      </div>
    </div>
  );
};

export default Projects;
