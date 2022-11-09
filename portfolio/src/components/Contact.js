import React from "react";
import Nav from "react-bootstrap/Nav";
import { FaGithub, FaLinkedin } from "react-icons/fa";


// CSS
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <br />
      <body className="body-container">
        <h1 className="contact-CSS">Contact</h1>
        <br />
        <br />
        <Nav className="d-flex justify-content-evenly">
          <a
            className="link-text-CSS"
            href="https://git.generalassemb.ly/rhaelfixer"
          >
            <FaGithub/>  Github
          </a>
          <a
            className="link-text-CSS"
            href="https://www.linkedin.com/in/rhael-fixer-324930133/"
          >
            <FaLinkedin/>  LinkedIn
          </a>
        </Nav>
        <br />
      </body>
    </>
  );
};

export default Contact;
