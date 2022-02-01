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
              imgPath={sample3}
              isBlog={false}
              title="React Portfolio"
              description='My personal portfolio deployed at kadargo63.github.io built with React which features some of my github projects as well as my resume and technical skills.'
              link="https://github.com/Kadargo63/Kadargo63.github.io"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={inventory}
              isBlog={false}
              title="Destination Dance Inventory"
              description="Full-stack MERN Inventory management app built to client specifications by team of 4 developers."
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
              imgPath={sample2}
              isBlog={false}
              title="Budget Tracker"
              description="This project involved refactoring code to update an existing budget tracker application to allow for offline access and functionality. The user will be able to add expenses and deposits to their budget with or without a connection. If the user enters transactions offline, the total should be updated when they're brought back online.

              This application is deployed to Heroku here: https://polar-inlet-88127.herokuapp.com/"
              link="https://github.com/Kadargo63/budgie-budget"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sample1}
              isBlog={false}
              title="Weather API"
              description="A simple web application that allows users to search for a city to get the current weather and 5 day forecast. This weather dashboard will run in the browser and feature dynamically updated HTML and CSS."
              link="https://github.com/Kadargo63/weather-or-not"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
 