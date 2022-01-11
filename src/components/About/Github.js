import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
    const colorTheme = {
        background: "transparent",
        text: "#000000",
        grade4: "014d2d",
        grade3: "04bd70",
        grade2: "0af291",
        grade1: "62f5b8",
        grade0: "a2fcd7",
    };
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
                Days I <strong className="teal">Code</strong>
            </h1>
            <GitHubCalendar
                username="Kadargo63"
                blockSize={15}
                blockMargin={5}
                theme={colorTheme}
                fontSize={16}
            />
        </Row>
    );
}

export default Github;