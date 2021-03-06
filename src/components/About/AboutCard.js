import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
    return (
        <Card className="quote-card-view">
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <p style={{ textAlign: "justify" }}>
                        My name is <span className="teal">Robert Isaacs</span> and I live in <span className="teal">Navarre, Florida</span>.
                        <br /> I'm a Full-Stack Web Developer looking to expand my skills and never stop learning. 
                        <br />I am crazy about puzzles. All of my life; whether I was taking apart my grandfather's pocketwatch to the horror of my mother, spending hours spellbound by a rubik's cube, or playing chess with my dad; I have always tried to learn how things work. Later I dissected the clockwork of largescale retail operations to diagnose root causes impacting success. I love to look at all the pieces and understand how they fit together. Now I am delighted to have found a field full of endless puzzles to solve.
                        <br />
                        <br />
                        In addition to coding, I also love:
                    </p>
                    <ul>
                        <li className="about-activity">
                            <ImPointRight /> playing the Violin. ðŧ
                        </li>
                        <li className="about-activity">
                            <ImPointRight /> tending to my honeybees. ððð
                        </li>
                        <li className="about-activity">
                            <ImPointRight /> spending time with my husband and canine kids. ð ðĻðū ðĐ
                        </li>
                        <li className="about-activity">
                            <ImPointRight /> feeding my houseplant addiction. ðŠī
                        </li>
                        <li className="about-activity">
                            <ImPointRight /> coding some more! ðĻðŧâðŧ
                        </li>
                    </ul>
                    <p style={{ marginBlockEnd: 0, color: "rgb(102, 0, 102)" }}>
                    âIf you fail to plan, you're planning to fail.â
                    </p>
                    <footer className="blockqoute-footer">Robert</footer>
                </blockquote>
            </Card.Body>
        </Card>
    );
}

export default AboutCard;