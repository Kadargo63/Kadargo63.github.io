import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import ContactForm from "./ContactForm";

function Contactme() {
    return (
        <Container fluid className="contact-section">
          <Particle />
              <Container>
                <h1 className="project-heading">
                  Say <strong className="teal">Hello </strong>
                </h1>
                <ContactForm />
            </Container>
    </Container>
  );
}


export default Contactme