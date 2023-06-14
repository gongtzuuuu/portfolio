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

function Project() {
  return (
    <div className="project-container">
      {/* --------------- */}
      {/* --- Project --- */}
      {/* --------------- */}
      <Container className="project">
        <Row>
          <Col xs={12} md={5} className="project-text">
            <p>Project Name</p>
            <h3>Office Simulator</h3>

            <hr style={{ border: "#937829 0.5px solid" }}></hr>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged. It was popularised
              in the 1960s with the release of Letraset sheets containing Lorem
              Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum
            </p>
            <hr style={{ border: "#937829 0.5px solid" }}></hr>
            <p>
              Tech stack:
              <span>
                <img className="project-icon" src={figmaIcon}></img>
                <img className="project-icon" src={htmlIcon}></img>
                <img className="project-icon" src={cssIcon}></img>
                <img className="project-icon" src={jsIcon}></img>
                <img className="project-icon" src={gitIcon}></img>
              </span>
            </p>
          </Col>
          <Col xs={12} md={7} className="project-img">
            <img src="https://images.unsplash.com/photo-1520475178495-a8d5b36f1782?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1156&q=80"></img>
          </Col>
        </Row>
      </Container>
      {/* --------------- */}
      {/* --- Project --- */}
      {/* --------------- */}
      <Container className="project">
        <Row>
          <Col xs={12} md={5} className="project-text">
            <p>Project Name</p>
            <h3>Office Simulator</h3>
            <hr style={{ border: "#937829 0.5px solid" }}></hr>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged. It was popularised
              in the 1960s with the release of Letraset sheets containing Lorem
              Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum
            </p>
            <hr style={{ border: "#937829 0.5px solid" }}></hr>
            <p>
              Tech stack:
              <span>
                <img className="project-icon" src={figmaIcon}></img>
                <img className="project-icon" src={htmlIcon}></img>
                <img className="project-icon" src={cssIcon}></img>
                <img className="project-icon" src={jsIcon}></img>
                <img className="project-icon" src={nodeIcon}></img>
                <img className="project-icon" src={dbIcon}></img>
                <img className="project-icon" src={gitIcon}></img>
              </span>
            </p>
          </Col>
          <Col xs={12} md={7} className="project-img">
            <img src="https://plus.unsplash.com/premium_photo-1677653126467-fb0fc59a9cde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=941&q=80"></img>
          </Col>
        </Row>
      </Container>
      {/* --------------- */}
      {/* --- Project --- */}
      {/* --------------- */}
      <Container className="project">
        <Row>
          <Col xs={12} md={5} className="project-text">
            <p>Project Name</p>
            <h3>Office Simulator</h3>
            <hr style={{ border: "#937829 0.5px solid" }}></hr>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged. It was popularised
              in the 1960s with the release of Letraset sheets containing Lorem
              Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum
            </p>
            <hr style={{ border: "#937829 0.5px solid" }}></hr>
            <p>
              Tech stack:
              <span>
                <img className="project-icon" src={figmaIcon}></img>
                <img className="project-icon" src={htmlIcon}></img>
                <img className="project-icon" src={cssIcon}></img>
                <img className="project-icon" src={jsIcon}></img>
                <img className="project-icon" src={reactIcon}></img>
                <img className="project-icon" src={nodeIcon}></img>
                <img className="project-icon" src={dbIcon}></img>
                <img className="project-icon" src={gitIcon}></img>
              </span>
            </p>
          </Col>
          <Col xs={12} md={7} className="project-img">
            <img src="https://images.unsplash.com/photo-1685276151314-7fe5f99650ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"></img>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Project;
