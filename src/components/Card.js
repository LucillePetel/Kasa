import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <div className="apartment-card">
      <Link to="/">
        <img src={props.cover} alt="picture-card" className="picture-card" />
        <h3 className="title-card">{props.title}</h3>
      </Link>
    </div>
  );
};

export default Card;
