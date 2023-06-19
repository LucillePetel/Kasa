import Footer from "../components/Footer";
import Header from "../components/Header";
import Carrousel from "../components/annonce/Carrousel";
import Info from "../components/annonce/Info";
import Collapse from "../components/Collapse";
import data from "../data/annonces.json";

import { useParams } from "react-router-dom";

const Annonce = (i) => {
  const { id } = useParams();
  const dataAnnonce = data.find((dataAnnonce) => dataAnnonce.id === id);

  return (
    <div className="annonce-page">
      <Header />
      <Carrousel pictures={dataAnnonce.pictures} />
      <Info
        key={i}
        title={dataAnnonce.title}
        host={dataAnnonce.host}
        tags={dataAnnonce.tags}
        location={dataAnnonce.location}
        rating={dataAnnonce.rating}
      />
      <div className="contain-collapse">
        <Collapse
          key={i}
          title="Description"
          description={dataAnnonce.description}
        />
        <Collapse
          key={i}
          title="Equipements"
          description={dataAnnonce.equipments}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Annonce;
