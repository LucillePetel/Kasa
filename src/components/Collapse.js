import React, { useState } from "react";
import Chevron from "../img/vector-bas.png";

const Collapse = (props) => {
  const [isContentVisible, setIsContentVisible] = useState(false);

  const openContent = () => {
    setIsContentVisible(!isContentVisible);
  };

  return (
    <div className="dropdown">
      <div onClick={openContent} className="dropdown-title-box">
        <h2 className="dropdown-title">{props.title}</h2>
        <img
          src={Chevron}
          alt="chevron"
          className={isContentVisible ? "chevron-rotate" : "chevron"}
        />
      </div>

      {isContentVisible && (
        <div className="dropdown-text">{props.description}</div>
      )}
    </div>
  );
};

export default Collapse;
