//import framer motion
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

//import react bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// import icons
import linkIcon from "../assets/share.png";
import htmlIcon from "../assets/icons/html5.svg";
import cssIcon from "../assets/icons/css3-alt.svg";
import jsIcon from "../assets/icons/square-js.svg";
import reactIcon from "../assets/icons/react.svg";
import nodejsIcon from "../assets/icons/node.svg";
import dbIcon from "../assets/icons/mongodb.png";
import gitIcon from "../assets/icons/git-alt.svg";

// Import components
import TextEffect from "./TextEffect";

//for the div variants
const divVariants = {
  visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
  hidden: { opacity: 0, scale: 0 },
};

function Project() {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div>
      {/* ------------------- */}
      {/* --- Project (1) --- */}
      {/* ------------------- */}
      <TextEffect delay={0}>
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
                      <p className="project-link-text">　client repository </p>
                    </NavLink>
                    ／
                    <NavLink
                      to="https://github.com/Panthari-Panthong/gluttonGlobe-server/"
                      target="_blank"
                    >
                      <p className="project-link-text">server repository</p>
                    </NavLink>
                  </div>
                </div>
                <hr style={{ border: "#937829 0.5px solid" }}></hr>
                <p>
                  GluttonGlobe is an interactive world map where users can mark
                  popular cities they have visited or wish to explore. By
                  logging into the app, users can leave their own comments that
                  are visible to others. This app enables a global community of
                  users to discover and share travel recommendations worldwide.
                  Developed in collaboration with partner Panthari Panthong and
                  Solen Wanono.
                </p>
                <hr style={{ border: "#937829 0.5px solid" }}></hr>
                <p>
                  Tech stack:
                  <span>
                    <img src={htmlIcon} className="project-icon"></img>
                    <img src={cssIcon} className="project-icon"></img>
                    <img src={jsIcon} className="project-icon"></img>
                    <img src={reactIcon} className="project-icon"></img>
                    <img src={nodejsIcon} className="project-icon"></img>
                    <img src={dbIcon} className="project-icon"></img>
                    {/* <img src={gitIcon} className="project-icon"></img> */}
                  </span>
                </p>
              </Col>
              <Col xs={12} md={7} className="project-img">
                <img src="https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"></img>
              </Col>
            </Row>
          </Container>
        </div>
      </TextEffect>

      {/* ------------------- */}
      {/* --- Project (2) --- */}
      {/* ------------------- */}
      <TextEffect delay={0.5}>
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
                  FitQuest is a full CRUD fitness tracker app enabling users to
                  create and track daily workouts. Users log exercises with
                  sets, weights, and reps, earning points based on difficulty.
                  Profile pages allow editing of personal details and display
                  workout history. Styled with a mobile-first approach, it
                  integrates API Ninjas Exercise API for exercise selection and
                  Cloudinary API for profile picture uploads. Developed in
                  collaboration with partner Ian Mason.
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
                    {/* <img src={gitIcon} className="project-icon"></img> */}
                  </span>
                </p>
              </Col>
              <Col xs={12} md={7} className="project-img">
                <img src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"></img>
              </Col>
            </Row>
          </Container>
        </div>
      </TextEffect>

      {/* ------------------- */}
      {/* --- Project (3) --- */}
      {/* ------------------- */}
      <TextEffect delay={1}>
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
                  Developed Office Simulator, a JavaScript-based web game,
                  responsible for implementing precise character control
                  mechanics using the up and down arrow keys. Created an
                  immersive user experience within a simulated office
                  environment, where the main goal is to generate $15 in revenue
                  within a challenging one-minute timeframe.
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
                <img src="https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"></img>
              </Col>
            </Row>
          </Container>
        </div>
      </TextEffect>
    </div>
  );
}

export default Project;
