import React from "react";
import redStar from "../../img/star-red.png";
import greyStar from "../../img/star-grey.png";

const Info = (props) => {
  const [firstName, lastName] = props.host.name.split(" ");

  return (
    <div className="content-info">
      <div className="info">
        {/* Affichage du titre de l'annonce */}
        <h1 className="annonce-title">{props.title}</h1>
        {/* Affichage de la localisation */}
        <p className="annonce-location">{props.location}</p>
        {/* Affichage des tags de l'annonce */}
        <ul className="annonce-tag">{props.tags}</ul>
      </div>
      <div className="annonce-host">
        {/* Affichage des infos de l'annonceur */}
        <div className="host">
          <p>
            {firstName}
            <br />
            {lastName}
          </p>
          <img src={props.host.picture} alt="host" className="host-picture" />
        </div>
        {/* Affichage de la note en fonction de props.rating */}
        <div className="annonce-rating">
          {[...Array(5)].map((star, index) => {
            const ratingValue = index + 1;
            return (
              <img
                key={index}
                src={ratingValue <= props.rating ? redStar : greyStar}
                alt="star"
                className="star"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Info;
