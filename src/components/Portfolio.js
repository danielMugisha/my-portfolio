import React from "react";
import IsoTopeGrid from "react-isotope";
import Works from "../components/Works";

const Portfolio = () => {
  const [header] = React.useState({
    mainHeader: "PORTFOLIO",
    subHeading: "My works",
    text:
      "I have worked on various projects in varous categories and different platforms...",
  });

  return (
    <div className="portfolio" id="portfolio">
      <div className="container">
        <div className="common">
          <h3 className="heading">{header.mainHeader}</h3>
          <h1 className="mainHeader">{header.subHeading}</h1>
          <p className="mainContent">{header.text}</p>
          <div className="commonBorder"></div>
        </div>
        <Works />
      </div>
    </div>
  );
};

export default Portfolio;
