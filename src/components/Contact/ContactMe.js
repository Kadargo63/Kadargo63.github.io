import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import ContactForm from "./ContactForm";

function Contactme() {
    return (
        <Container fluid className="contact-section">
          <Particle />
              <Container>
                <ContactForm />
            </Container>
    </Container>
  );
}


export default Contactme