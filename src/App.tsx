import React, { useState } from "react";
import "./App.scss";
import linkedinIcon from "./assets/linkedin.svg";
import githubIcon from "./assets/github.svg";
import codepenIcon from "./assets/codepen.svg";
import project_data from "./data/project_data.json";
import Projects from "./Projects";
import EmailForm from "./EmailForm";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <header style={{}} className="head background-view">
        <div className="head__contents">
          <h1 className="head__title">
            Hey! <br />
            I'm Jess Desrochers.
          </h1>
          <h3>I'm a full-stack software developer from Vancouver, Canada.</h3>
          <div className="head__social">
            <div className="head__social--icons">
              <a
                className="App-link"
                href="https://www.linkedin.com/in/jessdesr/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="social-icon" src={linkedinIcon} width="30px" />
              </a>
              <a
                className="App-link"
                href="https://www.github.com/jessdesr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="social-icon" src={githubIcon} width="30px" />
              </a>
              <a
                className="App-link"
                href="https://codepen.io/jessdesr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="social-icon" src={codepenIcon} width="30px" />
              </a>
            </div>
          </div>
        </div>
      </header>
      <div className="">
        <div className="projects-container content">
          <h2>Featured Project</h2>
          <Projects data={project_data} featuredOnly={true} />
          <button className="projects__button">View more projects</button>
        </div>
        <div className="contact-container content">
          <EmailForm />
        </div>
      </div>
      <footer className="footer">
        <p>Designed & built in React.js by me!</p>
      </footer>
    </div>
  );
}

export default App;
