import React from "react";
import './Profil.css'

function Profil () {

    return(
        <div className="cont">
        <div className="Greeting">
            <h2>Hi, I'm Muhammad Rafif Zahdana</h2>
        </div>
        <div className="About">
        <p>I'm interested in Web Development, User Interface Design
        and many things i tried to learn.<br></br> In the future I hope I
        could be good on things I'm interested in.</p>
        </div>
        <div className="Interest">
        <h4>What I'm interested in</h4>
        </div>
        <div className="foto">
            <img src="../../assets/foto.png" height={200} width></img>
        </div>
        <div className="social">
            <h2>Socials</h2>
        </div>
        <div className="ig">
        <a href="https://www.instagram.com/rafif.za/"><img src="../../assets/instagram.png" height={30}></img></a>
        </div>
        <div className="linkedin">
        <a href="https://www.instagram.com/rafif.za/"><img src="../../assets/linkedin.png" height={30}></img></a>
        </div>
        <div className="github">
        <a href="https://www.instagram.com/rafif.za/"><img src="../../assets/github.png" height={30}></img></a>
        </div>
        </div>
    )
    
}
export default Profil;