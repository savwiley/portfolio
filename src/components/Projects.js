import React, { useRef } from "react";
import simpleIcons from "simple-icons";
import DOMPurify from "dompurify";

const Projects = () => {
  const jsIcon = useRef(simpleIcons.Get('javascript').svg);
  const webpackIcon = useRef(simpleIcons.Get('webpack').svg);
  const reactIcon = useRef(simpleIcons.Get('react').svg);
  const reactRIcon = useRef(simpleIcons.Get('reactrouter').svg);
  const firebaseIcon = useRef(simpleIcons.Get('firebase').svg);
  const jestIcon = useRef(simpleIcons.Get('jest').svg);

  return(
    <div className="projects">

      <div className="proj">
        <div className="pic">hi</div>
        <div className="desc">
          <div>Where's Waldo?</div>
          <div>Where's Waldo-espue game with high scores table & three difficulties. TOP project. Where's Waldo-espue game with high scores table & three difficulties. TOP project. Where's Waldo-espue game with high scores table & three difficulties. TOP project. Where's Waldo-espue game with high scores table & three difficulties. TOP project. Where's Waldo-espue game with high scores table & three difficulties. TOP project. Where's Waldo-espue game with high scores table & three difficulties. TOP project.</div>
          <div>
            <span className="js" 
            dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(jsIcon.current)}} 
            />
            <span className="react" 
            dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(reactIcon.current)}} 
            />
            <span className="reactroute" 
            dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(reactRIcon.current)}} 
            />
            <span className="firebase" 
            dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(firebaseIcon.current)}} 
            />
          </div>
          <div>
            <a href="https://github.com/savwiley/waldo">GitHub</a>
            <a href="https://waldo-9e96c.web.app/">Live Preview</a>
          </div>
        </div>
      </div>

      <div className="proj">
      <div className="desc">
          <div>Battleship</div>
          <div>Where's Waldo-espue game with high scores table & three difficulties. TOP project. Where's Waldo-espue game with high scores table & three difficulties. TOP project. Where's Waldo-espue game with high scores table & three difficulties. TOP project. Where's Waldo-espue game with high scores table & three difficulties. TOP project. Where's Waldo-espue game with high scores table & three difficulties. TOP project. Where's Waldo-espue game with high scores table & three difficulties. TOP project.</div>
          <div>
            <span className="js" 
            dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(jsIcon.current)}} 
            />
            <span className="react" 
            dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(reactIcon.current)}} 
            />
            <span className="reactroute" 
            dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(reactRIcon.current)}} 
            />
            <span className="jest" 
            dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(jestIcon.current)}} 
            />
          </div>
          <div>
            <a href="https://github.com/savwiley/battleship">GitHub</a>
            <a href="https://savwiley.github.io/battleship/">Live Preview</a>
          </div>
        </div>
        <div className="pic">hey</div>
      </div>

      <div className="proj">
        <div className="pic">hi</div>
        <div className="desc">
          <div>Mock Retail Site</div>
          <div>Where's Waldo-espue game with high scores table & three difficulties. TOP project. Where's Waldo-espue game with high scores table & three difficulties. TOP project. Where's Waldo-espue game with high scores table & three difficulties. TOP project. Where's Waldo-espue game with high scores table & three difficulties. TOP project. Where's Waldo-espue game with high scores table & three difficulties. TOP project. Where's Waldo-espue game with high scores table & three difficulties. TOP project.</div>
          <div>
            <span className="js" 
            dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(jsIcon.current)}} 
            />
            <span className="react" 
            dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(reactIcon.current)}} 
            />
            <span className="reactroute" 
            dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(reactRIcon.current)}} 
            />
          </div>
          <div>
            <a href="https://github.com/savwiley/shopping-cart">GitHub</a>
            <a href="https://savwiley.github.io/shopping-cart/">Live Preview</a>
          </div>
        </div>
      </div>

      <div className="proj">
      <div className="desc">
          <div>Memory Game</div>
          <div>Where's Waldo-espue game with high scores table & three difficulties. TOP project. Where's Waldo-espue game with high scores table & three difficulties. TOP project. Where's Waldo-espue game with high scores table & three difficulties. TOP project. Where's Waldo-espue game with high scores table & three difficulties. TOP project. Where's Waldo-espue game with high scores table & three difficulties. TOP project. Where's Waldo-espue game with high scores table & three difficulties. TOP project.</div>
          <div>
            <span className="js" 
            dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(jsIcon.current)}} 
            />
            <span className="react" 
            dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(reactIcon.current)}} 
            />
          </div>
          <div>
            <a href="https://github.com/savwiley/memoryCard">GitHub</a>
            <a href="https://savwiley.github.io/memoryCard/">Live Preview</a>
          </div>
        </div>
        <div className="pic">hey</div>
      </div>

      <div className="proj">
        <div className="pic">hi</div>
        <div className="desc">
          <div>The Library</div>
          <div>Where's Waldo-espue game with high scores table & three difficulties. TOP project. Where's Waldo-espue game with high scores table & three difficulties. TOP project. Where's Waldo-espue game with high scores table & three difficulties. TOP project. Where's Waldo-espue game with high scores table & three difficulties. TOP project. Where's Waldo-espue game with high scores table & three difficulties. TOP project. Where's Waldo-espue game with high scores table & three difficulties. TOP project.</div>
          <div>
            <span className="js" 
            dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(jsIcon.current)}} 
            />
            <span className="webpack" 
            dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(webpackIcon.current)}} 
            />
            <span className="firebase" 
            dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(firebaseIcon.current)}} 
            />
          </div>
          <div>
            <a href="https://github.com/savwiley/libraryProject">GitHub</a>
            <a href="https://savwiley.github.io/libraryProject/dist/">Live Preview</a>
          </div>
        </div>
      </div>

      <div className="proj">
      <div className="desc">
          <div>To-Do List</div>
          <div>Where's Waldo-espue game with high scores table & three difficulties. TOP project. Where's Waldo-espue game with high scores table & three difficulties. TOP project. Where's Waldo-espue game with high scores table & three difficulties. TOP project. Where's Waldo-espue game with high scores table & three difficulties. TOP project. Where's Waldo-espue game with high scores table & three difficulties. TOP project. Where's Waldo-espue game with high scores table & three difficulties. TOP project.</div>
          <div>
            <span className="js" 
            dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(jsIcon.current)}} 
            />
            <span className="webpack" 
            dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(webpackIcon.current)}} 
            />
          </div>
          <div>
            <a href="https://github.com/savwiley/todos">GitHub</a>
            <a href="https://savwiley.github.io/todos/dist/">Live Preview</a>
          </div>
        </div>
        <div className="pic">hey</div>
      </div>

      <div className="proj">
        <div className="pic">hi</div>
        <div className="desc">
          <div>Weather App</div>
          <div>Where's Waldo-espue game with high scores table & three difficulties. TOP project. Where's Waldo-espue game with high scores table & three difficulties. TOP project. Where's Waldo-espue game with high scores table & three difficulties. TOP project. Where's Waldo-espue game with high scores table & three difficulties. TOP project. Where's Waldo-espue game with high scores table & three difficulties. TOP project. Where's Waldo-espue game with high scores table & three difficulties. TOP project.</div>
          <div>
            <span className="js" 
            dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(jsIcon.current)}} 
            />
            <span className="webpack" 
            dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(webpackIcon.current)}} 
            />
          </div>
          <div>
            <a href="https://github.com/savwiley/weather">GitHub</a>
            <a href="https://savwiley.github.io/weather/dist/">Live Preview</a>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Projects;