//import framer motion
import { NavLink } from "react-router-dom";

//import react bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//import icons
import linkIcon from "../assets/share.png";
import htmlIcon from "../assets/icons/html5.svg";
import cssIcon from "../assets/icons/css3-alt.svg";
import jsIcon from "../assets/icons/square-js.svg";
import reactIcon from "../assets/icons/react.svg";
import nodejsIcon from "../assets/icons/node.svg";
import dbIcon from "../assets/icons/mongodb.png";
import gitIcon from "../assets/icons/git-alt.svg";
import nextIcon from "../assets/icons/nextjs.svg";
import tailwindIcon from "../assets/icons/tailwindcss.svg";

//import components
import TextEffect from "./TextEffect";

//import photos
import songImg from "../assets/photos/song.jpeg";
import mapImg from "../assets/photos/map.jpeg";
import exerciseImg from "../assets/photos/workout.jpeg";
import officeImg from "../assets/photos/office.jpeg";

function Project() {
  return (
    <div>
      {/* ----------------- */}
      {/* --- meloverse --- */}
      {/* ----------------- */}
      <TextEffect delay={0.3}>
        <div className="project-container">
          <Container className="project">
            <Row>
              <Col xs={12} md={5} className="project-text">
                <h3 className="project-title">meloverse</h3>
                <hr style={{ border: "#937829 0.5px solid" }}></hr>
                <div>
                  <NavLink
                    className="project-link"
                    to="https://meloverse.vercel.app"
                    target="_blank"
                  >
                    <img src={linkIcon} className="project-link-icon" />
                    <p className="project-link-text">Deploy version</p>
                  </NavLink>
                  <NavLink
                    className="project-link"
                    to="https://github.com/gongtzuuuu/meloverse"
                    target="_blank"
                  >
                    <img src={linkIcon} className="project-link-icon" />
                    <p className="project-link-text">Github link</p>
                  </NavLink>
                </div>
                <hr style={{ border: "#937829 0.5px solid" }}></hr>
                <p>
                  meloverse is an innovative music app that enables users to
                  craft engaging posts with their favorite songs. Users can
                  seamlessly log in with Spotify account to access their
                  personal collection or explore new tracks by keywords or
                  artists. The app also introduce a thriving community of music
                  enthusiasts, where users share their love for songs and
                  discover a harmonious array of posts. Filter content by tags
                  to explore topics of your interest, connecting with
                  like-minded individuals.
                </p>
                <hr style={{ border: "#937829 0.5px solid" }}></hr>
                <p>
                  Tech stack:
                  <span>
                    <img src={nextIcon} className="project-icon"></img>
                    <img src={reactIcon} className="project-icon"></img>
                    <img src={jsIcon} className="project-icon"></img>
                    <img src={dbIcon} className="project-icon"></img>
                    <img src={tailwindIcon} className="project-icon"></img>
                  </span>
                </p>
              </Col>
              <Col xs={12} md={7} className="project-img">
                <img className="hover-effect" src={songImg}></img>
                <NavLink
                  className="overlay"
                  to="https://meloverse.vercel.app"
                  target="_blank"
                ></NavLink>
              </Col>
            </Row>
          </Container>
        </div>
      </TextEffect>
      {/* -------------------- */}
      {/* --- GluttonGlobe --- */}
      {/* -------------------- */}
      <TextEffect delay={0.3}>
        <div className="project-container">
          <Container className="project">
            <Row>
              <Col xs={12} md={5} className="project-text">
                <h3 className="project-title">GluttonGlobe</h3>
                <hr style={{ border: "#937829 0.5px solid" }}></hr>
                <div>
                  <NavLink
                    className="project-link"
                    to="https://bejewelled-alfajores-c72f6e.netlify.app/"
                    target="_blank"
                  >
                    <img src={linkIcon} className="project-link-icon" />
                    <p className="project-link-text">Deploy version</p>
                  </NavLink>
                  <div className="project-link">
                    <img src={linkIcon} className="project-link-icon" />
                    <p>Github link: </p>
                    <NavLink
                      to="https://github.com/Panthari-Panthong/gluttonGlobe-client"
                      target="_blank"
                    >
                      <p className="project-link-text">client</p>
                    </NavLink>
                    ／
                    <NavLink
                      to="https://github.com/Panthari-Panthong/gluttonGlobe-server/"
                      target="_blank"
                    >
                      <p className="project-link-text">server</p>
                    </NavLink>
                  </div>
                </div>
                <hr style={{ border: "#937829 0.5px solid" }}></hr>
                <p>
                  GluttonGlobe is an interactive global mapping platform
                  designed to facilitate user engagement in discovering and
                  sharing travel experiences. With a user-friendly interface,
                  users can log into the app and conveniently mark the cities
                  they have visited or aspire to explore on a world map.
                  Additionally, users can leave insightful comments that are
                  accessible to fellow users, offering a powerful feature for
                  the global community of travel enthusiasts to exchange
                  valuable recommendations on a worldwide scale.<br></br>
                  The app was developed in collaboration with partners Panthari
                  Panthong and Solen Wanono.
                </p>
                <hr style={{ border: "#937829 0.5px solid" }}></hr>
                <p>
                  Tech stack:
                  <span>
                    <img src={reactIcon} className="project-icon"></img>
                    <img src={nodejsIcon} className="project-icon"></img>
                    <img src={jsIcon} className="project-icon"></img>
                    <img src={dbIcon} className="project-icon"></img>
                    <img src={cssIcon} className="project-icon"></img>
                  </span>
                </p>
              </Col>
              <Col xs={12} md={7} className="project-img">
                <img className="hover-effect" src={mapImg}></img>
                <NavLink
                  className="overlay"
                  to="https://bejewelled-alfajores-c72f6e.netlify.app/"
                  target="_blank"
                ></NavLink>
              </Col>
            </Row>
          </Container>
        </div>
      </TextEffect>

      {/* ---------------- */}
      {/* --- FitQuest --- */}
      {/* ---------------- */}
      <TextEffect delay={0.3}>
        <div className="project-container">
          <Container className="project">
            <Row>
              <Col xs={12} md={5} className="project-text">
                <h3 className="project-title">FitQuest</h3>
                <hr style={{ border: "#937829 0.5px solid" }}></hr>
                <div>
                  <NavLink
                    className="project-link"
                    to="https://fitness-tracker.adaptable.app/"
                    target="_blank"
                  >
                    <img src={linkIcon} className="project-link-icon" />
                    <p className="project-link-text">Deploy version</p>
                  </NavLink>
                  <NavLink
                    className="project-link"
                    to="https://github.com/imason5/FitQuest"
                    target="_blank"
                  >
                    <img src={linkIcon} className="project-link-icon" />
                    <p className="project-link-text">Github link</p>
                  </NavLink>
                </div>
                <hr style={{ border: "#937829 0.5px solid" }}></hr>
                <p>
                  FitQuest is a fitness tracker app enabling users to create and
                  track daily workouts. By logging into the app, users can log
                  exercises with sets, weights, and reps, also earning points
                  based on difficulty. By integrating API Ninjas Exercise API,
                  the app provides a variety of workout templates for users to
                  choose from freely. On the personalised profile page, the app
                  displays each user's workout history and allows them to make
                  and edit personal details and change their profile pictures.
                  <br></br>The app was developed in collaboration with partner
                  Ian Mason.
                </p>
                <hr style={{ border: "#937829 0.5px solid" }}></hr>
                <p>
                  Tech stack:
                  <span>
                    <img src={htmlIcon} className="project-icon"></img>
                    <img src={cssIcon} className="project-icon"></img>
                    <img src={jsIcon} className="project-icon"></img>
                    <img src={nodejsIcon} className="project-icon"></img>
                    <img src={dbIcon} className="project-icon"></img>
                  </span>
                </p>
              </Col>
              <Col xs={12} md={7} className="project-img">
                <img src={exerciseImg}></img>
                <NavLink
                  className="overlay"
                  to="https://fitness-tracker.adaptable.app/"
                  target="_blank"
                ></NavLink>
              </Col>
            </Row>
          </Container>
        </div>
      </TextEffect>

      {/* ------------------------ */}
      {/* --- Office Simulator --- */}
      {/* ------------------------ */}
      <TextEffect delay={0.3}>
        <div className="project-container">
          <Container className="project">
            <Row>
              <Col xs={12} md={5} className="project-text">
                <h3 className="project-title">Office Simulator</h3>
                <hr style={{ border: "#937829 0.5px solid" }}></hr>
                <div>
                  <NavLink
                    className="project-link"
                    to="https://gongtzuuuu.github.io/office-simulator/"
                    target="_blank"
                  >
                    <img src={linkIcon} className="project-link-icon" />
                    <p className="project-link-text">Deploy version</p>
                  </NavLink>
                  <NavLink
                    className="project-link"
                    to="https://github.com/gongtzuuuu/office-simulator"
                    target="_blank"
                  >
                    <img src={linkIcon} className="project-link-icon" />
                    <p className="project-link-text">Github link</p>
                  </NavLink>
                </div>
                <hr style={{ border: "#937829 0.5px solid" }}></hr>
                <p>
                  Office Simulator is a JavaScript-Canvas-based web game
                  inspired by classic 2D web games, combining the theme with
                  Asian workplace culture and a touch of humor. During gameplay,
                  players can utilize the up and down arrow keys to precisely
                  control the character, with the main objective being to
                  accumulate 15 dollars in revenue within a one-minute
                  timeframe. Regardless of whether the game is won or lost,
                  users have the option to start anew after encountering an
                  Easter egg.
                </p>
                <hr style={{ border: "#937829 0.5px solid" }}></hr>
                <p>
                  Tech stack:
                  <span>
                    <img src={htmlIcon} className="project-icon"></img>
                    <img src={cssIcon} className="project-icon"></img>
                    <img src={jsIcon} className="project-icon"></img>
                    <img src={gitIcon} className="project-icon"></img>
                  </span>
                </p>
              </Col>
              <Col xs={12} md={7} className="project-img">
                <img src={officeImg}></img>
                <NavLink
                  className="overlay"
                  to="https://gongtzuuuu.github.io/office-simulator/"
                  target="_blank"
                ></NavLink>
              </Col>
            </Row>
          </Container>
        </div>
      </TextEffect>
    </div>
  );
}

export default Project;
