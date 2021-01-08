import React from "react";
import man from "../images/man-01.png";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterest,
  FaInstagram,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const Banner = () => {
  const [state] = React.useState({
    title: "I am Daniel MUGISHA",
    text:
      "and I am a professional software developer, with proven experience of over 2 years now.​",
  });
  return (
    <header className="header" id="header">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="header__content">
              <div className="header__section">
                <ul className="header__ul">
                  <li>
                    <a
                      href="https://web.facebook.com/danieldenzo/"
                      target="_blank"
                    >
                      <FaFacebookF />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/DanielMUGISHA19"
                      target="_blank"
                    >
                      <FaTwitter />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/mu_daniel1/"
                      target="_blank"
                    >
                      <FaInstagram />
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/danielMugisha" target="_blank">
                      <FaGithub />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/danielmugisha189/"
                      target="_blank"
                    >
                      <FaLinkedin />
                    </a>
                  </li>
                </ul>
                <h1>{state.title}</h1>
                <p>{state.text}</p>
                <div className="header__buttons">
                  <a href="#portfolio" className="btn btn-outline">
                    My Portfolio
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6" className="img__mover">
            <div className="banner__img">
              <img src={man} alt="profile" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Banner;
