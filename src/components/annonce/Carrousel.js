import React, { useState } from "react";

import leftArrow from "../../img/arrow-left.png";
import rightArrow from "../../img/arrow-right.png";

const Carrousel = (props) => {
  const [current, setCurrent] = useState(0);
  const length = props.pictures.length;

  // Fonction pour afficher l'image suivante
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  // Fonction pour afficher l'image précédente
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <section className="carrousel-contain">
      {props.pictures.map((picture, i) => {
        return (
          <article
            key={i}
            className={
              i === current ? "slide slider-active" : "slide slider-inactive"
            }
          >
            {i === current && (
              // Affiche l'image seulement si elle correspond à l'index actuel
              <img src={picture} alt="appartement" className="slider-picture" />
            )}
            {i === current && length > 1 && (
              <span className="slider-number">
                {current + 1}/{length}
              </span>
            )}
          </article>
        );
      })}

      {length > 1 ? (
        <>
          <div className="slider-previous" onClick={prevSlide}>
            {/* Afficher la diapositive précédente */}
            <img
              src={leftArrow}
              alt="arrow left"
              className="slider-previous-icon"
            />
          </div>
          <div className="slider-next" onClick={nextSlide}>
            {/* Afficher la diapositive suivante */}
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
