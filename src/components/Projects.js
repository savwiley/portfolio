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
        <div
          className="pic"
          alt="GIF of Where's Waldo-esque game featuring various pop culture characters."
        ></div>
        <div className="desc">
          <div>Where's Waldo?</div>
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

      <div className="proj battleship">
        <div className="desc">
          <div>Battleship</div>
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
        <div
          className="pic"
          alt="GIF of a Battleship game showcasing placement of ships & battle against an AI opponent."
        ></div>
      </div>

      <div className="proj cart">
        <div
          className="pic"
          alt="GIF of a fake retail site featuring a filter of product categories, individual item pages, and an interactive cart."
        ></div>
        <div className="desc">
          <div>Mock Retail Site</div>
          <div>
            This project was made with ReactJS & React-Router. In fact, this was the first time I had ever used React-Router before. This mock retail site features a catalogue of products, filterable through categories, that each have their own page with pictures, descriptions, and price. Users can submit/edit quantities and push their desired items to their shopping cart. The cart itself shows the total amount of items and allows users to delete products from their cart if they desire.
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
            <a
              href="https://github.com/savwiley/shopping-cart"
              alt="GitHub Repo"
            >
              GitHub
            </a>
            <a
              href="https://savwiley.github.io/shopping-cart/"
              alt="Preview Mock Retail Site"
            >
              Live Preview
            </a>
          </div>
        </div>
      </div>

      <div className="proj memory">
        <div className="desc">
          <div>Memory Game</div>
          <div>
            The memory game was made with React & was one of the first projects I ever used it on. This game taught me how to use custom hooks & object arrays with React. Here, the user clicks on images they haven't clicked on before, forcing them to remember 15 different images. The images I chose were various Marvel Cinematic Universe posters. If a user loses, their score (if higher than their previous scores) is set as their high score. If they can get through all 15 images, they win.
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
            <a href="https://github.com/savwiley/memoryCard" alt="GitHub Repo">
              GitHub
            </a>
            <a
              href="https://savwiley.github.io/memoryCard/"
              alt="Preview Memory Game"
            >
              Live Preview
            </a>
          </div>
        </div>
        <div
          className="pic"
          alt="GIF of a MCU poster selecting game with a high score system."
        ></div>
      </div>

      <div className="proj library">
        <div
          className="pic"
          alt="GIF of a universal library featuring user input & community interaction."
        ></div>
        <div className="desc">
          <div>The Library</div>
          <div>
            The Library was initially an older project that taught me how to use webpack. Originally, it kept a user's books stored on their browser's local storage where they could set if they read particular books or not. However, I have since gone back and refactored the code to add Firebase. Now, The Library is a universal one, always remembering new inputs & allowing users to put in whatever books they desire. They can also share which books they have read or sort through the current list of books in whatever way they desire. Feel free to take a look & add your own list of books.
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
            <a
              href="https://github.com/savwiley/libraryProject"
              alt="GitHub Repo"
            >
              GitHub
            </a>
            <a
              href="https://savwiley.github.io/libraryProject/dist/"
              alt="Preview the Library"
            >
              Live Preview
            </a>
          </div>
        </div>
      </div>

      <div className="proj weather">
        <div className="desc">
          <div>Weather App</div>
          <div>
            While the Weather App may lack a radar, it still works like any other weather app you may have come across. This project was one of the first times I used an API, as well as one of the first projects to teach me about Promises and async/await functions. It features the current weather in any major city in the world, while also displaying future predictions for the next few hours to next few days, accurate icons to depict the predicted weather, country flags of all cities, & the option to view temperatures in Fahrenheit or Celsius.
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
            <a href="https://github.com/savwiley/weather" alt="GitHub Repo">
              GitHub
            </a>
            <a
              href="https://savwiley.github.io/weather/dist/"
              alt="Preview Weather App"
            >
              Live Preview
            </a>
          </div>
        </div>
        <div
          className="pic"
          alt="GIF of a working weather app featuring user input to any location, accurate temperatures, weather reports, & icons of predicted weather."
        ></div>
      </div>
    </div>
  );
};

export default Projects;

// PROOFREAD starting at library