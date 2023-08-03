import { useState, useRef } from "react";

//import emailjs
import emailjs from "@emailjs/browser";

//import bootstrap components
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";

function Footer() {
  const [isSendEmail, setIsSendEmail] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_behtc0t",
        "template_1vtfxx9",
        form.current,
        "KmlJRvKqACo8dZHTR"
      )
      .then(
        (result) => {
          setIsSendEmail(true);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <div className="footer" id="footer">
      <div className="footer-container">
        <div className="footer-contact-form">
          <h3 style={{ marginBottom: "20px" }}>Contact me!</h3>
          <Form ref={form} onSubmit={sendEmail}>
            <Form.Group className="mb-3" controlId="form.Control.name">
              <Form.Control
                type="text"
                name="user_name"
                placeholder="Your name"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="form.Control.name">
              <Form.Control
                type="email"
                name="user_email"
                placeholder="Your email"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="form.Control.message">
              <Form.Control
                as="textarea"
                name="message"
                placeholder="Leave comments..."
                rows={4}
                required
              />
            </Form.Group>
            <Button type="submit" className="dark-button" variant="primary">
              Submit
            </Button>
          </Form>
          {isSendEmail ? <p>Message successfully sent!</p> : ""}
        </div>
      </div>
      <p className="copyright">©2023 TZU-YUN LIANG</p>
    </div>
  );
}

export default Footer;
