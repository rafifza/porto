import React from "react";
import './Projects.css'

function Project () {

    return(
        <div className="" >
            <div className="text"id="scroll">
                <h2>Project</h2>
            </div>
            <div className="text2">
                <p>My school projects</p>
            </div>
            <div className="ss">
            <div className="ss1">
                <img src="../../assets/ss1.png" height={300}></img>
                <div className="code1">
                    <a href="https://github.com/rafifza/Project-LAFORANT">Source code </a>
                </div>
            </div>
            <div className="ss2">
                <img src="../../assets/ss2.png" height={300}></img>
                <div className="code2">
                    <a href="https://github.com/rafifza/projectentre">Source code </a>
                 </div>
            </div>
            </div>
        </div>
    )
}

export default Project;