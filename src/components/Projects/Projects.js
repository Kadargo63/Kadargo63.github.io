import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import superfan from "../../Assets/Projects/superfan.png";
import sample1 from "../../Assets/Projects/sample1.png";
import sample2 from "../../Assets/Projects/sample2.png";
import inventory from "../../Assets/Projects/excelsior-inventory.png";
import sample3 from "../../Assets/Projects/sample3.png";
import techblog from "../../Assets/Projects/techblog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="teal">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={inventory}
              isBlog={false}
              title="Destination Dance Inventory"
              description="Full-stack MERN Inventory management app."
              link="https://github.com/Kadargo63/excelsior-inventory"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={superfan}
              isBlog={false}
              title="Super Fan!"
              description="This project was the result of a team collaboration to put our front end development skills to the test using HTML, CSS, Bulma, and 3 different third-party APIs."
              link="https://pfrueh1.github.io/SuperFan/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={techblog}
              isBlog={false}
              title="Blog-tas-tech"
              description="A CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers posts as well. This app follows the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication."
              link="https://github.com/Kadargo63/blog-tas-tech"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sample3}
              isBlog={false}
              title="Sample 3"
              description="Add project decription."
              link="https://github.com/Kadargo63/sample3"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sample2}
              isBlog={false}
              title="Sample 2"
              description="Add project decription."
              link="https://github.com/Kadargo63/sample2"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sample1}
              isBlog={false}
              title="Sample 1"
              description="Add project decription."
              link="https://github.com/Kadargo63/sample1"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
 