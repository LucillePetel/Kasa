import Footer from "../components/Footer";
import Header from "../components/Header";
import Carrousel from "../components/annonce/Carrousel";
import Info from "../components/annonce/Info";
import Collapse from "../components/Collapse";
import data from "../data/annonces.json";

import { useParams } from "react-router-dom";

const Annonce = (i) => {
  //useParams pour récuperer l'id depuis l'url
  const { id } = useParams();

  // Récupération des données de l'annonce correspondant à l'id
  const dataAnnonce = data.find((dataAnnonce) => dataAnnonce.id === id);
  return (
    <div className="annonce-page">
      <Header />
      <Carrousel pictures={dataAnnonce.pictures} />
      <Info
        key={i}
        title={dataAnnonce.title}
        host={dataAnnonce.host}
        tags={dataAnnonce.tags.map((tag) => (
          <li key={tag} className="tag">
            {tag}
          </li>
        ))}
        location={dataAnnonce.location}
        rating={dataAnnonce.rating}
      />
      <div className="contain-collapse">
        {/* Collapse contenant la description de l'annonce*/}
        <Collapse title="Description" description={dataAnnonce.description} />
        {/* Collapse contenant les équipements de l'annonce*/}
        <Collapse
          title="Equipements"
          description={
            <ul className="equipements">
              {dataAnnonce.equipments.map((equipment) => (
                <li key={equipment}>{equipment}</li>
              ))}
            </ul>
          }
        />
      </div>
      <Footer />
    </div>
  );
};

export default Annonce;
