import React from "react";
import "./Skills.css";

function Skills() {
  return (
    <section className="con">
      <div className="skill">
        <h2>Skills</h2>
      </div>
      <div className="conta">
        <div className="css">
          <img
            src="../../assets/css.png"
            alt="css"
            height={100}
            width={70}
          ></img>
        </div>
        <div className="html">
          <img
            src="../../assets/html.png"
            alt="html"
            height={100}
            width={100}
          ></img>
        </div>
        <div className="figma">
          <img
            src="../../assets/figma.svg"
            alt="figma"
            height={90}
            width={90}
          ></img>
        </div>
        <div className="vsc">
          <img
            src="../../assets/vsc.png"
            alt="vsc"
            height={90}
            width={90}
          ></img>
        </div>
        <div className="react">
          <img
            src="../../assets/react.png"
            alt="vsc"
            height={90}
            width={90}
          ></img>
        </div>
        <div className="node">
          <img
            src="../../assets/node.png"
            alt="vsc"
            height={90}
            width={90}
          ></img>
        </div>
      </div>
    </section>
  );
}

export default Skills;
