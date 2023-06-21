import React, { useState } from "react";

import leftArrow from "../../img/arrow-left.png";
import rightArrow from "../../img/arrow-right.png";

const Carrousel = (props) => {
  const [current, setCurrent] = useState(0);
  const length = props.pictures.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <section className="carrousel-contain">
      {props.pictures.map((picture, i) => {
        return (
          <div
            key={i}
            className={
              i === current ? "slide slider-active" : "slide slider-inactive"
            }
          >
            {i === current && (
              <img src={picture} alt="appartement" className="slider-picture" />
            )}
          </div>
        );
      })}

      {length > 1 ? (
        <>
          <div className="slider-previous" onClick={prevSlide}>
            <img
              src={leftArrow}
              alt="arrow left"
              className="slider-previous-icon"
            />
          </div>
          <div className="slider-next" onClick={nextSlide}>
            <img
              src={rightArrow}
              alt="arrow right"
              className="slider-next-icon"
            />
          </div>
        </>
      ) : null}
    </section>
  );
};

export default Carrousel;
