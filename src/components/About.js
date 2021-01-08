import React from "react";
import man from "../images/me-01-alt.png";

const About = () => {
  const [header] = React.useState({
    mainHeader: "ABOUT",
    subHeading: "About Me",
    text:
      "I was lucky to find a hobby in my career, as a developer I like engineering solutions and building cool-looking designs...",
  });
  return (
    <div className="about" id="about">
      <div className="container">
        <div className="common">
          <h3 className="heading">{header.mainHeader}</h3>
          <h1 className="mainHeader">{header.subHeading}</h1>
          <p className="mainContent">{header.text}</p>
          <div className="commonBorder"></div>
        </div>
        <div className="row h-650 alignCenter">
          <div className="col-6">
            <div className="about__img">
              <img src={man} alt="aboutPic" />
            </div>
          </div>
          <div className="col-6">
            <div className="about__info">
              <h1>Know more...</h1>
              <div className="about__info-p1">
                Since beginning my journey as a developer, I learned a lot from
                various projects, ranging from static websites, web apps,
                desktop applications, games and other digital solutions which
                gave me experience as a full stack developer, but I am naturally
                drawn to front end development.
              </div>
              <div className="about__info-p2">
                Let's queue up a conversation, I will buy the coffee 😇, It's
                always good to keep in touch...
              </div>
              <div className="info__contacts">
                <div className="row">
                  <div className="col-6">
                    <strong>Name:</strong>
                    <p>Daniel MUGISHA</p>
                  </div>
                  <div className="col-6">
                    <strong>Email:</strong>
                    <p>dmugisha189@gmail.com</p>
                  </div>
                  <div className="col-6">
                    <strong>Phone:</strong>
                    <p>+250782035937</p>
                  </div>
                  <div className="col-6">
                    <strong>LinkedIn:</strong>
                    <p>
                      {" "}
                      <a
                        href="https://www.linkedin.com/in/danielmugisha189/"
                        target="_blank"
                      >
                        Daniel Mugisha
                      </a>{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
