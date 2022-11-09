import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./components/Navbar";

import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";

class App extends Component {
  render() {
    return (
      <>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
        <br />
        <Contact></Contact>   
      </>
    );
  }
}


export default App;
