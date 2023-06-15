import React from "react";

const Carrouser = (props) => {
  return (
    <div className="carrousel-contain">
      <img src={props.pictures} alt="carrousel" />
    </div>
  );
};

export default Carrouser;
