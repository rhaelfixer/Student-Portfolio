import React from "react";
import pic from "../images/pic.jpg";
import ListGroup from "react-bootstrap/ListGroup";
import { AnimationOnScroll } from "react-animation-on-scroll";
import ProgressBar from "react-bootstrap/ProgressBar";


// CSS
import "./Resume.css";

const Resume = () => {
  const natural = 100;
  const excellent = 75;
  const skill = 70;
  const average = 50;
  const learner = 35;

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
      <div className="row g-3">
        <div className="col fadeinleft-CSS">
          <h3 className="text-center resume-headline-CSS">Name:</h3>
          <h3 className="text-center resume-line-CSS">Jimmy Lim Sze Hong</h3>
        </div>
        <div className="col fadeinright-CSS">
          <h3 className="text-center resume-headline-CSS">Email:</h3>
          <h3 className="text-center resume-line-CSS">rhaelfixer@gmail.com</h3>
        </div>
      </div>
      <br />
      <br />
      <AnimationOnScroll animateIn="animate__backInLeft" animateOnce>
        <h3 className="text-center resume-headline-CSS">
          Professional Experience:
        </h3>
        <ListGroup className="resume-line-CSS">
          <ListGroup.Item>
            <b>Eyesmate Optometrist | Optometrist</b>
            <br />
            5/2021 – 6/2021
            <br />
            Key Responsibilities:
            <ul>
              <li>
                Worked to provide the absolute highest quality vision care for
                all patients.
              </li>
              <li>
                Handled confidential patient information and medical history.
              </li>
              <li>
                Tested patient's vision during preliminary screenings and
                answered any questions or concerns regarding their vision.
              </li>
            </ul>
          </ListGroup.Item>
          <ListGroup.Item>
            <b>Focus Point | Optometrist</b>
            <br />
            9/2018 – 1/2021
            <br />
            Key Responsibilities:
            <ul>
              <li>Maintained up-to-date knowledge of all retail promotions.</li>
              <li>
                Effectively managed diseases affecting the vision of patients,
                including diabetes, auto-immune disorders, glaucoma, and retinas
                pigmentosa.
              </li>
              <li>Introduced helpful new vision products to clients.</li>
              <li>
                Remained up-to-date on the latest vision advancements and
                services.
              </li>
            </ul>
          </ListGroup.Item>
        </ListGroup>
      </AnimationOnScroll>
      <br />
      <br />
      <AnimationOnScroll animateIn="animate__backInRight" animateOnce>
        <h3 className="text-center resume-headline-CSS">
          Education Background:
        </h3>
        <ListGroup className="text-center resume-line-CSS">
          <ListGroup.Item>
            General Assembly:
            <br />
            Software Engineering Immersive
            <br />
            Aug. 2022 - Nov. 2022
          </ListGroup.Item>
          <ListGroup.Item>
            National Institute Of Ophthalmic Sciences:
            <br />
            Bachelor of Optometry
            <br />
            Jul. 2014 - Jul. 2018
          </ListGroup.Item>
        </ListGroup>
      </AnimationOnScroll>
      <br />
      <br />
      <div className="row g-3">
        <div className="col">
          <AnimationOnScroll animateIn="animate__backInLeft" animateOnce>
            <ListGroup className="text-center resume-headline-CSS">
              Hard Skills:
            </ListGroup>
            <ListGroup>
              <ListGroup.Item className="text-center resume-line-CSS">
                HTML/CSS
                <ProgressBar
                  animated
                  now={skill}
                  label={`${skill}%`}
                  variant="success"
                />
              </ListGroup.Item>
              <ListGroup.Item className="text-center resume-line-CSS">
                Javascript
                <ProgressBar
                  animated
                  now={average}
                  label={`${average}%`}
                  variant="success"
                />
              </ListGroup.Item>
              <ListGroup.Item className="text-center resume-line-CSS">
                Bootstrap
                <ProgressBar
                  animated
                  now={skill}
                  label={`${skill}%`}
                  variant="success"
                />
              </ListGroup.Item>
              <ListGroup.Item className="text-center resume-line-CSS">
                React
                <ProgressBar
                  animated
                  now={average}
                  label={`${average}%`}
                  variant="success"
                />
              </ListGroup.Item>
              <ListGroup.Item className="text-center resume-line-CSS">
                Node.js
                <ProgressBar
                  animated
                  now={learner}
                  label={`${learner}%`}
                  variant="success"
                />
              </ListGroup.Item>
              <ListGroup.Item className="text-center resume-line-CSS">
                Mongodb/PostgreSQL
                <ProgressBar
                  animated
                  now={learner}
                  label={`${learner}%`}
                  variant="success"
                />
              </ListGroup.Item>
            </ListGroup>
          </AnimationOnScroll>
        </div>
        <div className="col">
          <AnimationOnScroll animateIn="animate__backInRight" animateOnce>
            <ListGroup className="text-center resume-headline-CSS">
              Soft Skills:
            </ListGroup>
            <ListGroup>
              <ListGroup.Item className="text-center resume-line-CSS">
                Crtitical Thinking
                <ProgressBar
                  animated
                  now={excellent}
                  label={`${excellent}%`}
                  variant="success"
                />
              </ListGroup.Item>
              <ListGroup.Item className="text-center resume-line-CSS">
                Analytical Mindset
                <ProgressBar
                  animated
                  now={excellent}
                  label={`${excellent}%`}
                  variant="success"
                />
              </ListGroup.Item>
              <ListGroup.Item className="text-center resume-line-CSS">
                Adaptability
                <ProgressBar
                  animated
                  now={natural}
                  label={`${natural}%`}
                  variant="success"
                />
              </ListGroup.Item>
              <ListGroup.Item className="text-center resume-line-CSS">
                Self-Motivation
                <ProgressBar
                  animated
                  now={natural}
                  label={`${natural}%`}
                  variant="success"
                />
              </ListGroup.Item>
              <ListGroup.Item className="text-center resume-line-CSS">
                Patience
                <ProgressBar
                  animated
                  now={natural}
                  label={`${natural}%`}
                  variant="success"
                />
              </ListGroup.Item>
              <ListGroup.Item className="text-center resume-line-CSS">
                Creativity
                <ProgressBar
                  animated
                  now={excellent}
                  label={`${excellent}%`}
                  variant="success"
                />
              </ListGroup.Item>
            </ListGroup>
          </AnimationOnScroll>
        </div>
      </div>
    </>
  );
};

export default Resume;
