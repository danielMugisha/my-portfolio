import React from "react";
import man from "../images/me-01-alt.png";

const About = () => {
  const [header] = React.useState({
    mainHeader: "ABOUT",
    subHeading: "About Me",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas\
            culpa id dolore!",
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
              <h1>Hi There</h1>
              <div className="about__info-p1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur quos quibusdam beatae obcaecati deleniti optio
                molestias harum cumque aut veritatis. Exercitationem, laboriosam
                iusto. Sed esse magni itaque reiciendis, culpa iure?
              </div>
              <div className="about__info-p2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Impedit quidem possimus saepe maiores et qui ullam magnam
                quaerat sunt placeat.
              </div>
              <div className="info__contacts">
                <div className="row">
                  <div className="col-6">
                    <strong>Name:</strong>
                    <p>Jonathan Doe</p>
                  </div>
                  <div className="col-6">
                    <strong>Email:</strong>
                    <p>example@domain.com</p>
                  </div>
                  <div className="col-6">
                    <strong>Phone:</strong>
                    <p>+1 234 567890</p>
                  </div>
                  <div className="col-6">
                    <strong>LinkedIn:</strong>
                    <p>Jonathan_123</p>
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
