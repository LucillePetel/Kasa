import React from "react";
import redStar from "../../img/star-red.png";
import greyStar from "../../img/star-grey.png";

const Info = (props) => {
  const [firstName, lastName] = props.host.name.split(" ");

  return (
    <div className="content-info">
      <div className="info">
        <h1 className="annonce-title">{props.title}</h1>
        <p className="annonce-location">{props.location}</p>
        <ul className="annonce-tag">{props.tags}</ul>
      </div>
      <div className="annonce-host">
        <div className="host">
          <p>
            {firstName}
            <br />
            {lastName}
          </p>
          <img src={props.host.picture} alt="host" className="host-picture" />
        </div>
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
