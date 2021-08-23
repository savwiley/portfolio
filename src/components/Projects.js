import React, { useRef } from "react";
import simpleIcons from "simple-icons";
import DOMPurify from "dompurify";

const Projects = () => {
  const jsIcon = useRef(simpleIcons.Get("javascript").svg);
  const reactIcon = useRef(simpleIcons.Get("react").svg);
  const reactRIcon = useRef(simpleIcons.Get("reactrouter").svg);
  const firebaseIcon = useRef(simpleIcons.Get("firebase").svg);
  const jestIcon = useRef(simpleIcons.Get("jest").svg);
  const styledIcon = useRef(simpleIcons.Get("styledcomponents").svg);

  return (
    <div className="projects" id="projects">
      <div className="newProj dinos">
        <div className="descript">
          <div>Dino-War</div>

          <div
            className="pic"
            alt="GIF of the first level of Dino-War being played."
          ></div>

          <div>
            This game is a product of The Odin Project's first{" "}
            <a href="https://itch.io/jam/top-jam-1">Game Jam</a>. My team and I
            used Git & GitHub to collaborate, utilizing branches & pull
            requests. We also worked with React-Icons & Styled-Components. Our
            game is in the Edutainment genre and focues on teaching children
            7-10 years of age basic math skills. However, with three difficulty
            settings, almost anyone can find a bit of a challenge in the game.
            The coding team comprised of myself,{" "}
            <a href="https://github.com/rankoliang">rankoliang</a>, &{" "}
            <a href="https://github.com/timjacksonm">timjacksonm</a>.
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
              className="styled"
              data-tip="Styled-Components"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(styledIcon.current),
              }}
              alt="Styled-Components"
            />
          </div>
          <div>
            <a href="https://github.com/rankoliang/Dino-War" alt="GitHub Repo">
              GitHub
            </a>
            <a href="https://igni-sign.itch.io/dinowar" alt="Play Dino-War">
              Live View
            </a>
          </div>
        </div>
      </div>

      <div className="break"></div>

      <div className="newProj waldo">
        <div className="descript">
          <div>Where's Waldo?</div>
          <div
            className="pic"
            alt="GIF of Where's Waldo-esque game featuring various pop culture characters."
          ></div>
          <div>
            This app was made with ReactJS, React-Router, & Firebase. It relies
            heavily on Firebase's Firestore Database to store information about
            the answers and individual users' high scores. The app includes
            three difficulty settings, a high scores table based on time taken
            to find all of the characters, and the option to submit a score
            anonymously (by assigning the user a random Pokémon name). It also
            shows the most recent scores in each difficulty setting. The artwork
            used in this app was created by{" "}
            <a
              href="https://www.artstation.com/chekavo"
              alt="Egor Klyuchnyk artwork"
            >
              Egor Klyuchnyk
            </a>
            .
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
            <a href="https://github.com/savwiley/waldo" alt="GitHub Repo">
              GitHub
            </a>
            <a href="https://waldo-9e96c.web.app/" alt="Preview Where's Waldo?">
              Live Preview
            </a>
          </div>
        </div>
      </div>

      <div className="break"></div>

      <div className="newProj battleship">
        <div className="descript">
          <div>Battleship</div>
          <div
            className="pic"
            alt="GIF of a Battleship game showcasing placement of ships & battle against an AI opponent."
          ></div>
          <div>
            This Battleship game was made with React & React-Router. The bulk of
            the code was tested with Jest before any UI/UX was implemented to
            ensure ship placement and behavior with user interaction. This app
            allows players to place their own ships and play against an AI. It
            features an info board to keep players up to date on the computer's
            latest move and a small wait time while the computer is "thinking"
            about its next move, making the opponent seem more real and the game
            more fluid.
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
            <a href="https://github.com/savwiley/battleship" alt="GitHub Repo">
              GitHub
            </a>
            <a
              href="https://savwiley.github.io/battleship/"
              alt="Preview Battleship"
            >
              Live Preview
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
