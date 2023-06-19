import React from "react";

const Info = (props) => {
  return (
    <div className="content-info">
      <div className="annonce-title-content">
        <h1 className="annonce-title">{props.title}</h1>
        <p className="annonce-location">{props.location}</p>
        <div className="annonce-tag">{props.tags}</div>
      </div>
      <div className="annonce-host">
        <img src={props.host.picture} alt="host" className="host-picture" />
        <p>{props.host.name}</p>
        <div className="annonce-rating">{props.rating}</div>
      </div>
    </div>
  );
};

export default Info;
