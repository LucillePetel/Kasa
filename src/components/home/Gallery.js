import React, { useEffect, useState } from "react";
import Card from "../home/Card";

const Gallery = () => {
  const [apartments, setApartments] = useState([]);

  // récupère les appartements depuis annonces.json
  const fetchApartments = () => {
    fetch("annonces.json")
      .then((res) => res.json())
      .then((res) => setApartments(res))
      .catch(console.error);
  };

  // Appel de la fonction fetchApartments au chargement du composant
  useEffect(fetchApartments, []);

  return (
    <div className="gallery">
      {/* Affichage des cards pour chaque logement */}
      {apartments.map((apartment) => (
        <Card
          key={apartment.id}
          title={apartment.title}
          cover={apartment.cover}
          id={apartment.id}
        />
      ))}
    </div>
  );
};

export default Gallery;
