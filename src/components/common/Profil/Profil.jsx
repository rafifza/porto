import React from "react";
import "./Profil.css";
import { TypeAnimation } from "react-type-animation";

function Profil() {
  return (
    <section className="cont">
      <div className="details">
        <div className="intro">
          <span className="Greeting">
            <h2>Hi, I'm Muhammad Rafif Zahdana</h2>
          </span>
          <div className="About">
            <p>
              I'm interested in Web Development, User Interface Design and many
              things i tried to learn.<br></br> In the future I hope I could be
              good on things I'm interested in.
            </p>
          </div>
        </div>
        <div className="intCont">
          <span className="Interest">
            <h4>What I'm interested in</h4>
            <span className="Typing">
              <TypeAnimation
                sequence={[
                  "Laravel",
                  1300,
                  "React Native",
                  1300,
                  "Angular.js",
                  1300,
                  () => {
                    console.log("Done typing!");
                  },
                ]}
                wrapper="div"
                cursor={true}
                repeat={Infinity}
                style={{ fontSize: "2em" }}
              />
            </span>
          </span>
        </div>
        <div className="social">
          <h2>Socials</h2>
        </div>
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
        </div>
      </div>
      <span className="foto">
        <img src="../../assets/foto.png" height={200} width></img>
      </span>
    </section>
  );
}
export default Profil;
