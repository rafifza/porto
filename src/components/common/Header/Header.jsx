import React from "react";
import "./Header.css";

function Header() {
  return (
    <div name="cont-header" >
      <div className="header">
        <img src="../../assets/logo.png" className="logo" height={70}>

        </img>
        <a href="#scroll" className="button">
          <p>Projects</p>
        </a>
      </div>
    </div>
    
  );
}

export default Header;
