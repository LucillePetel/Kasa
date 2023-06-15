import Footer from "../components/Footer";
import Header from "../components/Header";
import Carrouser from "../components/annonce/Carrouser";
import Info from "../components/annonce/Info";
import Description from "../components/annonce/Description";

import { useParams } from "react-router-dom";
import data from "../data/annonces.json";

const Annonce = () => {
  const { id } = useParams();

  const dataAnnonce = data.find((dataAnnonce) => dataAnnonce.id === id);

  return (
    <div className="annonce-page">
      <Header />
      <Carrouser key={2} pictures={dataAnnonce.pictures} />
      <Info
        key={1}
        title={dataAnnonce.title}
        host={dataAnnonce.host}
        tags={dataAnnonce.tags}
        location={dataAnnonce.location}
        rating={dataAnnonce.rating}
      />
      <Description
        key={dataAnnonce.id}
        description={dataAnnonce.description}
        equipements={dataAnnonce.equipments}
      />
      <Footer />
    </div>
  );
};

export default Annonce;
