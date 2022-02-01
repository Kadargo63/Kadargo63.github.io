import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import ContactForm from "./ContactForm";
import contactImg from "../../Assets/contact.png";
import Tilt from "react-parallax-tilt";
import './contact.css';



function Contactme() {
    return (
        <Container fluid className="about-section">
          <Particle />
              <Container>
              <Row style={{ justifyContent: "center", padding: "10px" }}>
                    <Col md={7} style={{
                        justifyContent: "center",
                        paddingTop: "30px",
                        paddingBottom: "50px",
                    }}
                    >
                      <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                            <strong className="teal">Reach</strong> Out!
                        </h1>
                        <p> <a href="mailto:robertisaacs87@yahoo.com">ROBERTISAACS87@YAHOO.COM</a> </p>
                        

                    </Col>    
                    <Col md={5} style={{ paddingTop: "120px", paddingBottom: "50px" }} className="about-img" >
                        <Tilt>
                        <img src={contactImg} alt="about" className="img-fluid" />
                        </Tilt>
                    </Col>
                 </Row>
                <h1 className="project-heading">
                  Say <strong className="teal">Hello </strong>
                </h1>

                <ContactForm />

            </Container>
    </Container>
  );
}


export default Contactme;