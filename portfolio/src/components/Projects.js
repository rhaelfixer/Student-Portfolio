import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "animate.css";
import image1 from "../images/tic-tac-toe.png";
import image2 from "../images/heroku-proxy.png";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// CSS
import "./Projects.css";

const Projects = () => {
  return (
    <>
      <br />
      <h1 className="fadein-zoomin-CSS Projects-CSS">Projects</h1>
      <br />
      <h3 className="fadein-zoomin-CSS projects-line-CSS">
        Here are a list of Projects that I have made:
      </h3>
      <br />
      <Container>
        <Row>
          <Col>
            <img
              src={image1}
              className="animate__animated animate__fadeInLeft rounded mx-auto d-block image2-CSS"
              alt="tic-tac-toe"
            />
            <figcaption className="animate__animated animate__fadeInLeft projects-line-CSS">
              <a
                href="https://pages.git.generalassemb.ly/rhaelfixer/Project-1-TicTacToe/"
                className="img-text-CSS"
              >
                Tic-Tac-Toe
              </a>
            </figcaption>
          </Col>
          <Col>
            <img
              src={image2}
              className="animate__animated animate__fadeInRight rounded mx-auto d-block image2-CSS"
              alt="CRUD"
            />
            <figcaption className="animate__animated animate__fadeInRight projects-line-CSS">
              <a
                href="https://best-heroku-proxy.herokuapp.com"
                className="img-text-CSS"
              >
                Heroku Proxy
              </a>
            </figcaption>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Projects;
