import React from "react";
import IsoTopeGrid from "react-isotope";
import Works from "../components/Works";

const Portfolio = () => {
  const [header] = React.useState({
    mainHeader: "PORTFOLIO",
    subHeading: "My works",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas\
            culpa id dolore!",
  });

  const Filters = [
    { label: "all", isChecked: true },
    { label: "automation", isChecked: false },
    { label: "e-commerce", isChecked: false },
    { label: "social", isChecked: false },
    { label: "game", isChecked: false },
    { label: "testing", isChecked: false },
    { label: "react", isChecked: false },
    { label: "python", isChecked: false },
  ];

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
