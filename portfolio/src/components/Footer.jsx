import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { NavLink } from "react-bootstrap";

function Footer() {
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col>
            <NavLink className="social">
              <div className="social-img">
                <img src="https://www.hp.com/us-en/shop/app/assets/images/uploads/prod/How%20to%20Add%20Music%20to%20an%20Instagram%20Story1643223591951107.jpg"></img>
              </div>
              <div className="social-text">
                <p>Instagram</p>
                <h5>liangtzuyunn09</h5>
              </div>
            </NavLink>
          </Col>
          <Col>
            <NavLink className="social">
              <div className="social-img">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc93G-imIa1bod1o14Uk10KhQ2CRExJ4DYuw&usqp=CAU"></img>
              </div>
              <div className="social-text">
                <p>Codepen</p>
                <h5>liangtzuyunn09</h5>
              </div>
            </NavLink>
          </Col>
          <Col>
            <NavLink className="social" style={{ border: "none" }}>
              <div className="social-img">
                <img src="https://kinsta.com/wp-content/uploads/2023/02/github-pages.jpg"></img>
              </div>
              <div className="social-text">
                <p>GitHub</p>
                <h5>liangtzuyunn09</h5>
              </div>
            </NavLink>
          </Col>
        </Row>
      </Container>
      <p className="copyright">copyright ©TZU All Rights Reserved.</p>
    </div>
  );
}

export default Footer;
