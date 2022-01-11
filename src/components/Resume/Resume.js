import React, { useSate, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Button } from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import axios from "axios";
import pdf from "../../Assets/Soumyajit-Behera.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {
    const uri = "https://porfolio-backend.vercel.app/ranks/getRanks";
    const [spojRank, upadteSpojRank] = useState(0);
    const [hackerrank, upadteHackerank] = useState(0);
    const [sem, upadateSem] = useState(0);
    const [cgpa, upadteCgpa] = useState(0);
}