import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <article className="apartment-card">
      <Link to={`/annonce/${props.id}`}>
        <img
          src={props.cover}
          alt="visuel appartement"
          className="picture-card"
        />
        <h3 className="title-card">{props.title}</h3>
      </Link>
    </article>
  );
};

export default Card;
