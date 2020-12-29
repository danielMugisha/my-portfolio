import React from "react";
import ProgressBar from "./ProgressBar";

const Skills = () => {
  const [header] = React.useState({
    mainHeader: "SKILLS",
    subHeading: "Work With Me",
    text:
      "Phasellus accumsan scelerisque dolor, quis mattis justo bibendum non. Nulla sollicitudin turpis in elementum varius.\
       Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae",
  });

  const [state] = React.useState([
    { label: "HTML 5", bgcolor: "#6a1b9a", completed: 90 },
    { label: "CSS 3", bgcolor: "#00695c", completed: 85 },
    { label: "JavaScript", bgcolor: "#ef6c00", completed: 70 },
    { label: "ReactJs", bgcolor: "#ef6c00", completed: 70 },
    { label: "Python", bgcolor: "#ef6c00", completed: 65 },
    { label: "C#", bgcolor: "#ef6c00", completed: 70 },
    { label: "Git", bgcolor: "#ef6c00", completed: 75 },
    { label: "Docker", bgcolor: "#ef6c00", completed: 60 },
  ]);
  return (
    <div className="skills">
      <div className="container">
        <div className="row alignCenter">
          <div className="col-6">
            <div className="skills__left">
              <h3 className="heading">{header.mainHeader}</h3>
              <h1 className="mainHeader">{header.subHeading}</h1>
              <p className="mainContent">{header.text}</p>
              <a href="" className="btn btn-outline">
                Hire Me
              </a>
            </div>
          </div>
          <div className="col-6">
            <div className="skills__info">
              {state.map((item) => (
                <ProgressBar
                  label={item.label}
                  bgcolor={item.bgcolor}
                  completed={item.completed}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
