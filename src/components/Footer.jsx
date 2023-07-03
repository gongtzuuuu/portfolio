import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

// Import componenets from bootstrap
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
  };

  return (
    <div className="footer" id="footer">
      <div className="footer-container">
        <div className="footer-contact-form">
          <h3 style={{ marginBottom: "20px" }}>Contact me :)</h3>
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
      <p className="copyright">
        Icons by creators on flaticon and iconmonstr.<br></br>Photos by David
        Brooke Martin, kasra fayyazi, Annie Spratt, José Ignacio, Victor
        Freitas, Mario Gogh, Z on Unsplash.<br></br>Designed and developed by
        TZU-YUN LIANG 2023
      </p>
    </div>
  );
}

export default Footer;
