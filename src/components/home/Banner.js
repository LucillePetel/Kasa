import React from "react";
import homeBanner from "../../img/home-banner.png";

const Banner = () => {
  return (
    <div className="home-banner">
      <img src={homeBanner} className="home-banner-img" alt="Home Banner" />
      <h2 className="banner-text">Chez vous, partout et ailleurs</h2>
    </div>
  );
};

export default Banner;
