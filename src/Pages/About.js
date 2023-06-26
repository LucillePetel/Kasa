import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import BannerAbout from "../components/about/BannerAbout";
import Collapse from "../components/Collapse";

const About = () => {
  const [abouts, setAbouts] = useState([]);

  const fectchAbouts = () => {
    fetch("aboutData.json")
      .then((res) => res.json())
      .then((res) => setAbouts(res))
      .catch(console.error);
  };

  useEffect(fectchAbouts, []);

  return (
    <div className="about-page">
      <Header />
      <BannerAbout />
      <div className="about-collapse">
        {abouts.map((about, index) => (
          <Collapse
            key={index}
            title={about.title}
            description={about.description}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default About;
