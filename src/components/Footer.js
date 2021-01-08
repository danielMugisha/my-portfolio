import React from "react";
import logo from "../images/logo.png";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="container">
        <div className="footerSection">
          <div className="row justifyContent">
            <div className="footerSection_logo">
              <img src={logo} alt="logo" />
            </div>
            <div className="footerContent">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
              suscipit enim blanditiis quisquam aperiam consectetur nulla
              temporibus sed recusandae doloribus et, ratione veritatis
              voluptatum porro voluptatibus laborum ad mollitia sapiente.
            </div>
            <div className="aboutCirles">
              <ul className="header__ul">
                <li>
                  <FaFacebookF />
                </li>
                <li>
                  <FaTwitter />
                </li>
                <li>
                  <FaInstagram />
                </li>
                <li>
                  <FaGithub />
                </li>
                <li>
                  <FaLinkedin />
                </li>
              </ul>
            </div>
            <div className="copyright">
              Copyright © 2021 <span style={{ color: "#057033" }}>DM</span> All
              Rights Reserved By Daniel Mugisha
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
