import { Button } from "react-bootstrap";
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
            <FloatingLabel
              controlId="floatingInput"
              label="Email address"
              className="mb-3"
            >
              <Form.Control type="email" placeholder="name@example.com" />
            </FloatingLabel>
            <FloatingLabel controlId="floatingTextarea2" label="Comments">
              <Form.Control
                as="textarea"
                placeholder="Leave a comment here"
                style={{ height: "100px" }}
              />
            </FloatingLabel>
            <Button className="dark-button">Submit</Button>
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
