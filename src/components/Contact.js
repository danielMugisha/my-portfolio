import emailjs from "emailjs-com";
import { init } from "emailjs-com";
import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaGithub } from "react-icons/fa";

export default function ContactUs() {
  const [header] = React.useState({
    mainHeader: "THINKING OF A PROJECT?",
    subHeading: "Contact Me",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas\
            culpa id dolore!",
  });

  function sendEmail(e) {
    e.preventDefault();

    init("user_oOGx44iSX0GHPZxq5JYhL");
    emailjs
      .sendForm(
        "service_rgk0i5o",
        "template_j2q4mkd",
        e.target,
        "user_oOGx44iSX0GHPZxq5JYhL"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <div className="contact" id="contact">
      <div className="container">
        <div className="common">
          <h3 className="heading">{header.mainHeader}</h3>
          <h1 className="mainHeader">{header.subHeading}</h1>
          <p className="mainContent">{header.text}</p>
          <div className="commonBorder"></div>
        </div>
        <form onSubmit={sendEmail} className="formContainer">
          <div className="row card__container">
            <div className="col-4 contact__card">
              <div className="card__icon">
                <FaMapMarkerAlt />
              </div>
              <div className="card__content">
                <strong>Locate me</strong>
                <p>Kigali-Rwanda</p>
              </div>
            </div>
            <div className="col-4 contact__card">
              <div className="card__icon">
                <FaPhoneAlt />
              </div>
              <div className="card__content">
                <strong>Give us a call</strong>
                <p>+250 782 035937</p>
              </div>
            </div>
            <div className="col-4 contact__card">
              <div className="card__icon">
                <FaGithub />
              </div>
              <div className="card__content">
                <strong>Check me out</strong>
                <a href="https://github.com/danielMugisha" target="_blank">
                  <p>danielMugisha</p>
                </a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                name="name"
              />
            </div>
            <div className="col-6">
              <input
                type="email"
                className="form-control"
                placeholder="Email Address"
                name="email"
              />
            </div>
            <div className="row">
              <div className="col-12">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Subject"
                  name="subject"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <textarea
                  className="form-control"
                  id=""
                  cols="30"
                  rows="8"
                  placeholder="Your message"
                  name="message"
                ></textarea>
              </div>
            </div>

            <div className="sendButton">
              <input
                type="submit"
                className="btn btn-outline"
                value="Send Message"
              ></input>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
