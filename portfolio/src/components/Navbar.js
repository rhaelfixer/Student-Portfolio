import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import image from "../images/portfolio-logo.jpg";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

// CSS
import "./Navbar.css";


export default function Navbar() {
  const [toggle, setToggle] = useState(true);

  return (
    <div className="row">
      <p className="p-CSS">Hello there, welcome to my portfolio.</p>
      <div className="col-md-3 header-CSS">
        <img
          src={image}
          className="rounded mx-auto d-block image1-CSS"
          alt="portfolio-logo"
        />
      </div>
      <div className="col-md-9 header-CSS">
        <h3 className="h3-CSS">
          <nav className="navbar" onClick={() => setToggle(!toggle)}>
            <Nav className={toggle ? "nav-menu" : "nav-menu active"}>
              <Link className="link-CSS" to="/" >
                About
              </Link>
              <Link className="link-CSS" to="/projects">
                Projects
              </Link>
              <Link className="link-CSS" to="/resume">
                Resume
              </Link>
            </Nav>
            <div
              onClick={() => setToggle(!toggle)}
              className={toggle ? "hamburger" : "hamburger active"}
            >
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>
          </nav>
        </h3>
      </div>
    </div>
  );
}




