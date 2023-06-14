import { Button, InputGroup } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
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
          <h3>Multiple addons</h3>
          <p>
            Multiple add-ons are supported and can be mixed with checkbox and
            radio input versions.
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
