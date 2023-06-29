import React, { useState } from "react";
import Chevron from "../img/vector-bas.png";

const Collapse = (props) => {
  const [isContentVisible, setIsContentVisible] = useState(false);

  // Ouvrir ou fermer le contenu du collapse
  const openContent = () => {
    setIsContentVisible(!isContentVisible);
  };

  return (
    <div className="dropdown">
      <div onClick={openContent} className="dropdown-title-box">
        <h2 className="dropdown-title">{props.title}</h2>
        {/* Affichage de l'icône de chevron et rotation si le contenu est visible */}
        <img
          src={Chevron}
          alt="chevron"
          className={isContentVisible ? "chevron-rotate" : "chevron"}
        />
      </div>
      {isContentVisible ? (
        <div className="dropdown-text">{props.description}</div>
      ) : (
        <div className="dropdown-text-none">{props.description}</div>
      )}
    </div>
  );
};

export default Collapse;
