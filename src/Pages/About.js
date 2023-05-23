import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import BannerAbout from "../components/about/BannerAbout";
import AboutBox from "../components/about/AboutBox";

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(fectchAbouts, []);

  function fectchAbouts() {
    fetch("aboutData.json")
      .then((res) => res.json())
      .then((res) => setAbouts(res))
      .catch(console.error);
  }

  return (
    <div>
      <Header />
      <BannerAbout />
      {abouts.map((about) => (
        <AboutBox title={about.title} content={about.content} />
      ))}
      <Footer />
    </div>
  );
};

export default About;
