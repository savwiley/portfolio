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
            This game is the product of my first ever Game Jam. Through it, I gained invaluable experience of working with a team, including how to properly use branches and pull requests via Git & Github. I also learned several techniques from my teammates, such as Styled-Components, React-Icons, & just better organizational skills overall. The topic of the Game Jam was Edutainment, so we created a math game featuring dinosaurs with a target audience of 7-10 year olds. The user adds up the points on each dinosaur and discovers which side will win based on those points. With three difficulty settings, any age group can find some enjoyment in playing. The coding team comprised of myself, <a href="https://github.com/rankoliang">rankoliang</a>, & <a href="https://github.com/timjacksonm">timjacksonm</a>.
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
            <a
              href="https://igni-sign.itch.io/dinowar"
              alt="Play Dino-War"
            >
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
            This app was made with ReactJS, React-Router, & Firebase. It was one of the first I created using Firebase, and so I learned how to use it, Firestore, & other Firebase features. The app includes three difficulty settings, a high scores table based on time taken to find all the characters, and the option to submit your score anonymously (by assigning you a random Pokémon name). It also shows the most recent scores in each difficulty setting. The artwork used in this app was created by <a
              href="https://www.artstation.com/chekavo"
              alt="Egor Klyuchnyk artwork"
            >
              Egor Klyuchnyk
            </a>.
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
            This Battleship game was made with React & React-Router. Though it wasn't the first project I used a testing framework on, it was the first time I used Jest & integrated testing so thoroughly into a project. This app allows players to place their own ships and play against an AI. It features an info board to keep players up to date on the computer's latest move and a small wait time while the computer is "thinking" about its next move, making the opponent seem a little more real and the game more fluid.
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