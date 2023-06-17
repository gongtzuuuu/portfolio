//import framer motion
import React, { useEffect, useRef, useState } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

//import react bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
//import icon
import figmaIcon from "/src/assets/icons/figma.svg";
import htmlIcon from "/src/assets/icons/html5.svg";
import cssIcon from "/src/assets/icons/css3-alt.svg";
import jsIcon from "/src/assets/icons/square-js.svg";
import gitIcon from "/src/assets/icons/git-alt.svg";
import nodeIcon from "/src/assets/icons/node.svg";
import reactIcon from "/src/assets/icons/react.svg";
import dbIcon from "/src/assets/icons/database-solid.svg";

//for the div variants
const divVariants = {
  visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
  hidden: { opacity: 0, scale: 0 },
};

function Project({ projects }) {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <>
      {projects.map((eachProject) => {
        return (
          <motion.div
            key={eachProject._id}
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={divVariants}
            className="project-container"
          >
            <Container className="project">
              <Row>
                <Col xs={12} md={5} className="project-text">
                  <p>Project Name</p>
                  <h3>{eachProject.title}</h3>

                  <hr style={{ border: "#937829 0.5px solid" }}></hr>
                  <p>{eachProject.description}</p>
                  <hr style={{ border: "#937829 0.5px solid" }}></hr>
                  <p>
                    Tech stack:
                    <span></span>
                  </p>
                </Col>
                <Col xs={12} md={7} className="project-img">
                  <img src={eachProject.picture}></img>
                </Col>
              </Row>
            </Container>
          </motion.div>
        );
      })}
    </>
  );
}

export default Project;
