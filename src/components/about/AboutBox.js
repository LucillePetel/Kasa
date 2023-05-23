import React from "react";

const AboutBox = (props) => {
  return (
    <div className="about-box">
      <div>
        <h2>{props.title}</h2>
      </div>
      <div>
        <p>{props.content}</p>
      </div>
    </div>
  );
};

export default AboutBox;
