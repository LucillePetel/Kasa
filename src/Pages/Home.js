import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Banner from "../components/home/Banner";
import Gallery from "../components/home/Gallery";

const Home = () => {
  return (
    <div className="home-page">
      <Header />
      <Banner />
      <Gallery />
      <Footer />
    </div>
  );
};

export default Home;
