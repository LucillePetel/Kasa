import React from "react";
import AboutBanner from "../../img/about-banner.png";

const BannerAbout = () => {
  return (
    <div className="about-banner">
      <img src={AboutBanner} alt="About Banner" className="about-banner-img" />
    </div>
  );
};

export default BannerAbout;
