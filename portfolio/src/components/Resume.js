import React from "react";
import pic from "../images/pic.jpg";

// CSS
import "./Resume.css";

const Resume = () => {
  return (
    <>
      <br />
      <img
        src={pic}
        className="rounded mx-auto d-block pic-CSS fadeinzoomin-CSS"
        alt="pic"
      />
      <h1 className="resume-CSS fadeinzoomin-CSS">Resume</h1>
      <br />
      <div className="row g-3 fadeinzoomin-CSS">
        <div className="col">
          <h3 className="text-center resume-headline-CSS">Name:</h3>
          <h3 className="text-center resume-line-CSS">Jimmy Lim Sze Hong</h3>
        </div>
        <div className="col">
          <h3 className="text-center resume-headline-CSS">Email:</h3>
          <h3 className="text-center resume-line-CSS">rhaelfixer@gmail.com</h3>
        </div>
      </div>
      <br />
      <br />
      <h3 className="text-center resume-line-CSS fadeinzoomin-CSS">
        Education Background:
        <ul className="list-group list-group-flush text-center">
          <li className="list-group-item">
            2022 (6 Months Bootcamp): <br /> Software Engineering Immersive
          </li>
          <li className="list-group-item">
            2015 - 2019: <br /> Bachelor of Optometry
          </li>
          <li className="list-group-item">
            2014 - 2015: <br /> Foundation in Science
          </li>
          <li className="list-group-item">
            2009 - 2013: <br /> Cambridge IGCSE O Level
          </li>
        </ul>
      </h3>
      <br />
      <br />
      <div className="row g-3 fadeinzoomin-CSS">
        <div className="col">
          <h3 className="text-center resume-headline-CSS">Soft Skills:</h3>
          <h3 className="text-center resume-line-CSS">Crtitical Thinking</h3>
          <h3 className="text-center resume-line-CSS">Self-Motivation</h3>
          <h3 className="text-center resume-line-CSS">Creativity</h3>
          <h3 className="text-center resume-line-CSS">Resourcefulness</h3>
          <h3 className="text-center resume-line-CSS">Patience</h3>
        </div>
        <div className="col">
          <h3 className="text-center resume-headline-CSS">Hard Skills:</h3>
          <h3 className="text-center resume-line-CSS">HTML/CSS</h3>
          <h3 className="text-center resume-line-CSS">Javascript</h3>
          <h3 className="text-center resume-line-CSS">ReactJS</h3>
          <h3 className="text-center resume-line-CSS">NodeJS/Mongodb</h3>
          <h3 className="text-center resume-line-CSS">PostgreSQL</h3>
        </div>
      </div>
    </>
  );
};

export default Resume;
