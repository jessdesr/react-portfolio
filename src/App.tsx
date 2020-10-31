import React from 'react';
import './App.scss';
import linkedinIcon from './assets/linkedin.svg';
import githubIcon from './assets/github.svg';
import codepenIcon from './assets/codepen.svg';
import logo from './assets/logo.svg';
import project_data from './data/project_data.json';
import Projects from './Projects';
import EmailForm from './EmailForm';

function App() {
  return (
    <div className="App">
      <nav className="topbar">
        <div className="topbar__content">
          {/* <h2>Projects</h2> */}
          <div className="hexagon"><img src={logo} /></div>
          {/* <h2>Contact</h2> */}
        </div>
      </nav>
      <header style={{  }} className="head background-view">
        <div className="head__contents">
          <h1 className="head__title">
            Hey! <br/>I'm Jess Desrochers.
          </h1>
          <h3>
            I'm a full-stack software developer from Vancouver, Canada.
          </h3>
          <div className="head__social">
            <div className= "head__social--icons">
              <a
                className="App-link"
                href="https://www.linkedin.com/in/jessdesr/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="social-icon" src={linkedinIcon} width="30px"/>
              </a>
              <a
                className="App-link"
                href="https://www.github.com/jessdesr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="social-icon" src={githubIcon} width="30px"/>
              </a>
              <a
                className="App-link"
                href="https://codepen.io/jessdesr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="social-icon" src={codepenIcon} width="30px"/>
              </a>
            </div>
          </div>
        </div>
      </header>
      <div className="projects-container">
        <h2>Featured Project</h2>
        <Projects data={project_data} featuredOnly={true} />
        <button className="App-link">View more projects</button>
      </div>
      <div className="contact-container">
        <EmailForm />
      </div>
      <footer className="footer">
        <p>Designed & built in React.js by me!</p>
      </footer>
    </div>
  );
}

export default App;
