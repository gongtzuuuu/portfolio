import { Button, InputGroup } from "react-bootstrap";
import Form from "react-bootstrap/Form";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-decoration">
          <p></p>
          <p></p>
          <p></p>
        </div>
        <div className="footer-contact-form">
          <h3>Contact me</h3>
          <p>
            Interested in working together? Feel free to contact me at anytime!
          </p>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Email" />
            </Form.Group>
            <InputGroup>
              <Form.Control
                as="textarea"
                placeholder="Comments"
                aria-label="With textarea"
              />
            </InputGroup>
            <Button className="dark-button" variant="primary">
              Submit
            </Button>
          </Form>
        </div>
        <div></div>
        <p></p>
      </div>
      <p className="copyright">copyright ©TZU All Rights Reserved.</p>
    </div>
  );
}

export default Footer;
