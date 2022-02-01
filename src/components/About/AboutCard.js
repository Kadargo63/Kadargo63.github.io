import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
    return (
        <Card className="quote-card-view">
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <p style={{ textAlign: "justify" }}>
                        Salutations! My name is <span className="teal">Robert Isaacs</span> and I live in <span className="teal">Navarre, Florida</span>.
                        <br /> I'm a Full-Stack Web Developer.
                        <br />
                        <br />
                        In addition to coding, I also love:
                    </p>
                    <ul>
                        <li className="about-activity">
                            <ImPointRight /> Playing the Violin. 
                        </li>
                        <li className="about-activity">
                            <ImPointRight /> Tending to my honeybees. 🐝🐝🐝
                        </li>
                        <li className="about-activity">
                            <ImPointRight /> Spending time with my husband and canine kids.
                        </li>
                        <li className="about-activity">
                            <ImPointRight /> Coding some more!
                        </li>
                    </ul>
                    <p style={{ marginBlockEnd: 0, color: "rgb(102, 0, 102)" }}>
                    “If you fail to plan, you're planning to fail.”
                    </p>
                    <footer className="blockqoute-footer">Robert</footer>
                </blockquote>
            </Card.Body>
        </Card>
    );
}

export default AboutCard;