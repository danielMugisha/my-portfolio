import React from "react";
import man from "../images/man-01.png";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterest,
  FaInstagram,
  FaPlay,
  FaGithub,
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
                    <FaFacebookF />
                  </li>
                  <li>
                    <FaTwitter />
                  </li>
                  <li>
                    <FaPinterest />
                  </li>
                  <li>
                    <FaInstagram />
                  </li>
                  <li>
                    <FaGithub />
                  </li>
                </ul>
                <h1>{state.title}</h1>
                <p>{state.text}</p>
                <div className="header__buttons">
                  <a href="" className="btn btn-outline">
                    My Portfolio
                  </a>
                  &nbsp;&nbsp; &nbsp;{" "}
                  <a href="" className="btn btn-smart">
                    <FaPlay className="play" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
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
