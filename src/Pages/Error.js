import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import NotFound from "../components/error/NotFound";

const Error = () => {
  return (
    <div className="error-page">
      <Header />
      <NotFound />
      <Footer />
    </div>
  );
};

export default Error;
