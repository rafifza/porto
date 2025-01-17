import React from "react";
import "./Profil.css";
import { TypeAnimation } from "react-type-animation";
import "./index.js";

function Profil() {
  return (
    <section className="cont-details">
      <div className="details">
        <div className="intro">
          <span className="Greeting">
            <h2>Hi, I'm Muhammad Rafif Zahdana</h2>
          </span>
          <div className="About">
            <p>
              I'm interested in Mobile Development, User Interface Design and
              many things i tried to learn.<br></br> In the future I hope I
              could be good on things I'm interested in.
            </p>
          </div>
        </div>
        <div className="intCont">
          <span className="Interest">
            <span className="content-interest">What I'm interested in</span>
            <span className="Typing">
              <TypeAnimation
                sequence={[
                  "Flutter",
                  1400,
                  "React Native",
                  1500,
                  "Swift",
                  1400,
                  () => {
                    console.log("Done typing!");
                  },
                ]}
                wrapper="div"
                cursor={true}
                repeat={Infinity}
              />
            </span>
          </span>
        </div>
        <div className="social">Socials</div>
        <div className="socmed">
          <div className="ig">
            <a href="https://www.instagram.com/rafif.za/">
              <img src="../../assets/instagram.png" height={30}></img>
            </a>
          </div>
          <div className="linkedin">
            <a href="https://www.linkedin.com/in/muhammad-rafif-zahdana-b92a4222a/">
              <img src="../../assets/linkedin.png" height={30}></img>
            </a>
          </div>
          <div className="github">
            <a href="https://github.com/rafifza">
              <img src="../../assets/github.png" height={30}></img>
            </a>
          </div>
          <a href="mailto:rafifzahdana14@gmail.com" className="email">
            Email me
          </a>
        </div>
      </div>
    </section>
  );
}
export default Profil;
