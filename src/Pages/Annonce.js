import Footer from "../components/Footer";
import Header from "../components/Header";
import Carrousel from "../components/annonce/Carrousel";
import Info from "../components/annonce/Info";
import Collapse from "../components/Collapse";
import data from "../data/annonces.json";

import { useNavigate, useParams } from "react-router-dom";
import Tags from "../components/annonce/Tags";
import { useEffect, useState } from "react";

const Annonce = (i) => {
  //useParams pour récuperer l'id depuis l'url
  const { id } = useParams();
  const [annonce, setAnnonce] = useState();
  const navigate = useNavigate();

  // Récupération des données de l'annonce correspondant à l'id

  useEffect(() => {
    const dataAnnonce = data.find((dataAnnonce) => id === dataAnnonce.id);
    if (dataAnnonce) {
      setAnnonce(dataAnnonce);
    } else {
      navigate("/not-found");
    }
  }, [id]);
  return (
    <>
      {annonce && (
        <div className="annonce-page">
          <Header />
          <Carrousel pictures={annonce.pictures} />
          <Info
            key={i}
            title={annonce.title}
            host={annonce.host}
            tags={annonce.tags.map((tag) => (
              <Tags key={tag} tag={tag} />
            ))}
            location={annonce.location}
            rating={annonce.rating}
          />
          <section className="contain-collapse">
            {/* Collapse contenant la description de l'annonce*/}
            <Collapse title="Description" description={annonce.description} />
            {/* Collapse contenant les équipements de l'annonce*/}
            <Collapse
              title="Equipements"
              description={
                <ul className="equipements">
                  {annonce.equipments.map((equipment) => (
                    <li key={equipment}>{equipment}</li>
                  ))}
                </ul>
              }
            />
          </section>
          <Footer />
        </div>
      )}
    </>
  );
};

export default Annonce;
