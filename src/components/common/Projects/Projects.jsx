import React from "react";
import "./Projects.css";

function Project() {
  return (
    <div className="cont-project">
      <div className="text" id="scroll">
        <h2>Project</h2>
      </div>
      <div className="text2">
        <p>My school projects</p>
      </div>
      <div className="ss">
        <div className="imgss1">
          <img src="../../assets/ss1.png" className="img1"></img>
          <button className="code1">
            <img
              src="../../assets/github.png"
              className="logo-source-code"
            ></img>
            <a href="https://github.com/rafifza/Project-LAFORANT">
              Source code{" "}
            </a>
          </button>
        </div>
        <div className="imgss2">
          <img src="../../assets/ss2.png" className="img2"></img>
          <button className="code2">
            <img
              src="../../assets/github.png"
              className="logo-source-code"
            ></img>
            <a href="https://github.com/rafifza/projectentre">Source code </a>
          </button>
        </div>
      </div>
      <div className="imgss3">
      <img src="../../assets/ss3.png" className="img3"></img>
          <button className="code2">
            <img
              src="../../assets/github.png"
              className="logo-source-code"
            ></img>
            <a href="https://github.com/rafifza/projectentre">Source code </a>
          </button>
      </div>
    </div>
  );
}

export default Project;
