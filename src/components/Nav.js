import { FaBars } from "react-icons/fa";
import React from "react";
import logo from "../images/logo.png";

const Nav = () => {
  const [state, setState] = React.useState(true);
  return (
    <nav className="navbar" id="navbar">
      <div className="container">
        <div className="navbar__container">
          <ul className="navbar__left">
            <div className="navbar__left-logo">
              <a href="#">
                <img src={logo} alt="logo" />
              </a>
            </div>
          </ul>
          {state ? (
            <ul className="navbar__right">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="toggle" onClick={() => setState(!state)}>
        <FaBars />
      </div>
    </nav>
  );
};

export default Nav;
