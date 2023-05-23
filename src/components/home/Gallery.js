import React, { useEffect, useState } from "react";
import Card from "../home/Card";

const Gallery = () => {
  const [apartments, setApartments] = useState([]);

  useEffect(fetchApartments, []);

  function fetchApartments() {
    fetch("annonces.json")
      .then((res) => res.json())
      .then((res) => setApartments(res))
      .catch(console.error);
  }

  return (
    <div className="gallery">
      {apartments.map((apartment) => (
        <Card title={apartment.title} cover={apartment.cover} />
      ))}
    </div>
  );
};

export default Gallery;
