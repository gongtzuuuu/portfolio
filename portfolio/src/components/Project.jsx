//import framer motion
import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

//import react bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//for the div variants
const divVariants = {
  visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
  hidden: { opacity: 0, scale: 0 },
};

function Project({ id, title, description, picture }) {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <>
      <motion.div
        key={id}
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
              <h3>{title}</h3>

              <hr style={{ border: "#937829 0.5px solid" }}></hr>
              <p>{description}</p>
              <hr style={{ border: "#937829 0.5px solid" }}></hr>
              <p>
                Tech stack:
                <span></span>
              </p>
            </Col>
            <Col xs={12} md={7} className="project-img">
              <img src={picture}></img>
            </Col>
          </Row>
        </Container>
      </motion.div>
    </>
  );
}

export default Project;
