//import framer motion
import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

//import react bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// import data
import projectsData from "../data/data.json";

//for the div variants
const divVariants = {
  visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
  hidden: { opacity: 0, scale: 0 },
};

function Project() {
  console.log(projectsData);

  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div>
      <motion.div
        key="1"
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
              <h3>Office Simulator</h3>

              <hr style={{ border: "#937829 0.5px solid" }}></hr>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived
                not only five centuries, but also the leap into electronic
              </p>
              <hr style={{ border: "#937829 0.5px solid" }}></hr>
              <p>
                Tech stack:
                <span></span>
              </p>
            </Col>
            <Col xs={12} md={7} className="project-img">
              <img src="https://images.unsplash.com/photo-1685276151314-7fe5f99650ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"></img>
            </Col>
          </Row>
        </Container>
      </motion.div>
      <motion.div
        key="2"
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
              <h3>Office Simulator</h3>

              <hr style={{ border: "#937829 0.5px solid" }}></hr>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived
                not only five centuries, but also the leap into electronic
              </p>
              <hr style={{ border: "#937829 0.5px solid" }}></hr>
              <p>
                Tech stack:
                <span></span>
              </p>
            </Col>
            <Col xs={12} md={7} className="project-img">
              <img src="https://images.unsplash.com/photo-1685276151314-7fe5f99650ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"></img>
            </Col>
          </Row>
        </Container>
      </motion.div>
      <motion.div
        key="3"
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
              <h3>Office Simulator</h3>

              <hr style={{ border: "#937829 0.5px solid" }}></hr>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived
                not only five centuries, but also the leap into electronic
              </p>
              <hr style={{ border: "#937829 0.5px solid" }}></hr>
              <p>
                Tech stack:
                <span></span>
              </p>
            </Col>
            <Col xs={12} md={7} className="project-img">
              <img src="https://images.unsplash.com/photo-1685276151314-7fe5f99650ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"></img>
            </Col>
          </Row>
        </Container>
      </motion.div>
    </div>
  );
}

export default Project;
