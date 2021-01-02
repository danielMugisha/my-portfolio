import React, { useEffect, useState } from "react";
import "./Works.css";
import images from "./Projects";

function Works() {
  const [tag, setTag] = useState("all");
  const [filteredImages, setFilteredImages] = useState([]);

  useEffect(() => {
    tag === "all"
      ? setFilteredImages(images)
      : setFilteredImages(images.filter((image) => image.tag === tag));
  }, [tag]);

  return (
    <div className="App">
      <div className="tags">
        <ul className="ks-cboxtags">
          <li className="filter">
            <TagButton
              name="all"
              tagActive={tag === "all" ? true : false}
              handleSetTag={setTag}
            />{" "}
          </li>
          <li className="filter">
            <TagButton
              name="new"
              tagActive={tag === "new" ? true : false}
              handleSetTag={setTag}
            />{" "}
          </li>
          <li className="filter">
            <TagButton
              name="free"
              tagActive={tag === "free" ? true : false}
              handleSetTag={setTag}
            />{" "}
          </li>
          <li>
            <TagButton
              name="pro"
              tagActive={tag === "pro" ? true : false}
              handleSetTag={setTag}
            />{" "}
          </li>
        </ul>
      </div>
      <div className="Works__container">
        {filteredImages.map((image) => (
          <div className="card">
            <div key={image.id} className="image-card">
              <a href={image.imageName}>
                <img src={image.imageName} alt="" />
              </a>
              <h3>{image.description}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const TagButton = ({ name, handleSetTag, tagActive }) => {
  return (
    <button
      className={`tag ${tagActive ? "active" : null}`}
      onClick={() => handleSetTag(name)}
    >
      {name.toUpperCase()}
    </button>
  );
};

export default Works;
