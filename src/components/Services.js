import React from "react";
import {
  FaLaptopCode,
  FaDatabase,
  FaSpellCheck,
  FaCogs,
  FaChess,
  FaSearchengin,
} from "react-icons/fa";
const Services = () => {
  const [header] = React.useState({
    mainHeader: "SERVICES",
    subHeading: "My Services",
    text:
      "I offer a range of services, including designing, building and managing web applications, desktop apps and many more... ",
  });

  const [state] = React.useState([
    {
      id: 1,
      icon: <FaLaptopCode />,
      heading: "Development",
      text:
        "I am skilled at developing high-end desktop and web applications. I am also skilled at customizing web/desktop applications to suit your business requirements",
    },
    {
      id: 2,
      icon: <FaSpellCheck />,
      heading: "Testing",
      text:
        "I have expertise in testing services and I can identify bugs and conduct debugging in your codes. Testing is essential, as if the codes have bugs, the the results would be wrong",
    },
    {
      id: 3,
      icon: <FaDatabase />,
      heading: "Database Design",
      text:
        "I am compentent in developing open database architecture in distributed environments, decision supprot and client/server amongst others",
    },
    {
      id: 4,
      icon: <FaCogs />,
      heading: "Maintenance",
      text:
        "With my technical expertise, I can efficiently maintain small, medium and large websites and keep them constantly updated.",
    },
    {
      id: 5,
      icon: <FaChess />,
      heading: "Game Development",
      text:
        "I enjoy fantasy, and this gives me unique capability of creating world class games ranging from puzzles, strategy, Adventure, Action, Simulation and Sports games",
    },
    {
      id: 6,
      icon: <FaSearchengin />,
      heading: "SEO",
      text:
        "Various businesses today use websites and/or social media handles, let me make it work better for you with greater far results.",
    },
  ]);
  return (
    <div className="services" id="services">
      <div className="container">
        <div className="services__header">
          <div className="common">
            <h3 className="heading">{header.mainHeader}</h3>
            <h1 className="mainHeader">{header.subHeading}</h1>
            <p className="mainContent">{header.text}</p>
            <div className="commonBorder"></div>
          </div>
          <div className="row">
            {state.map((info) => (
              <div className="col-4">
                <div className="services__box">
                  <span className="commonIcons">{info.icon}</span>
                  <div className="services__box-header">{info.heading}</div>
                  <div className="services__box-p">{info.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
