import React from "react";

const Carrousel = (props) => {
  console.log(props.pictures[0]);

  return (
    <section className="carrousel-contain">
      <img src={props.pictures[0]} alt="carrousel" className="carrousel" />
    </section>
  );
};

export default Carrousel;
