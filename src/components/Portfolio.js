import React from "react";
import IsoTopeGrid from "react-isotope";
import wrapline from "../images/wrapline.jpg";

const Portfolio = () => {
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
  const projects = [
    {
      id: "a",
      image:
        "https://i.pinimg.com/564x/bb/e1/bb/bbe1bbf81582aeff7adf8b30317f8a67.jpg",
      row: 0,
      col: 0,
      w: 1,
      h: 1,
      filter: ["automation", "python"],
    },
    {
      id: "b",
      image:
        "https://i.pinimg.com/564x/bb/e1/bb/bbe1bbf81582aeff7adf8b30317f8a67.jpg",
      row: 0,
      col: 1,
      w: 1,
      h: 1,
      filter: ["e-commerce", "react"],
    },
    {
      id: "c",
      image:
        "https://i.pinimg.com/564x/bb/e1/bb/bbe1bbf81582aeff7adf8b30317f8a67.jpg",
      row: 0,
      col: 3,
      w: 1,
      h: 1,
      filter: ["testing"],
    },
    {
      id: "d",
      image:
        "https://i.pinimg.com/564x/bb/e1/bb/bbe1bbf81582aeff7adf8b30317f8a67.jpg",
      row: 1,
      col: 0,
      w: 1,
      h: 1,
      filter: ["game"],
    },
    {
      id: "e",
      image:
        "https://i.pinimg.com/564x/bb/e1/bb/bbe1bbf81582aeff7adf8b30317f8a67.jpg",
      row: 1,
      col: 1,
      w: 1,
      h: 1,
      filter: ["social"],
    },
    {
      id: "f",
      image:
        "https://i.pinimg.com/564x/bb/e1/bb/bbe1bbf81582aeff7adf8b30317f8a67.jpg",
      row: 1,
      col: 2,
      w: 1,
      h: 1,
      filter: ["social", "python"],
    },
    {
      id: "h",
      image:
        "https://i.pinimg.com/564x/bb/e1/bb/bbe1bbf81582aeff7adf8b30317f8a67.jpg",
      row: 2,
      col: 0,
      w: 1,
      h: 1,
      filter: ["react", "testing"],
    },
  ];

  const [filters, updateFilters] = React.useState(Filters);

  const onFilter = (e) => {
    const {
      target: { value, checked },
    } = e;

    updateFilters((state) =>
      state.map((f) => {
        if (f.label === value) {
          return {
            ...f,
            isChecked: checked,
          };
        }
        return f;
      })
    );
  };
  return (
    <div>
      <ul className="ks-cboxtags">
        {filters.map((f) => (
          <li className="filter" key={`${f.label}_key`}>
            <input
              id={f.label}
              type="checkbox"
              value={f.label}
              onChange={onFilter}
              checked={f.isChecked}
            />
            <label htmlFor={f.label}>{f.label}</label>
          </li>
        ))}
      </ul>
      <div className="container">
        <IsoTopeGrid
          gridLayout={projects} // gridlayout of cards
          noOfCols={3} // number of columns show in one row
          unitWidth={200} // card width of 1 unit
          unitHeight={100} // card height of 1 unit
          filters={filters} // list of selected filters
        >
          {projects.map((card) => (
            <div key={card.id} className={card.filter[0]}>
              <img src={card.image} alt="" />
            </div>
          ))}
        </IsoTopeGrid>
      </div>
    </div>
  );
};

export default Portfolio;
