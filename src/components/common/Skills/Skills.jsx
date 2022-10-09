import React from "react";
import './Skills.css'

function Skills (){

    return(
        <div className="con">
            <div className="skill"><h2>Skills</h2>
            </div>
            <div className="conta">
                <div className="css">
                <img src="/src/assets/css.png" alt="css" height={100} width={70}></img>
                </div>
                <div className="html">
                <img src="/src/assets/html.png" alt="html" height={100} width={100}></img>  
                </div>
                <div className="figma">
                <img src="/src/assets/figma.svg" alt="figma" height={90} width={90}></img>
                </div>
                <div className="vsc">
                <img src="/src/assets/vsc.png" alt="vsc" height={90} width={90}></img>
                </div>
            </div>
            
        </div>
    )
}

export default Skills;