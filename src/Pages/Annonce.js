import Footer from "../components/Footer";
import Header from "../components/Header";
import Carrouser from "../components/annonce/Carrouser";
import Info from "../components/annonce/Info";
import Description from "../components/annonce/Description";
import { useParams } from "react-router-dom";

const Annonce = () => {
  const { id } = useParams();
  console.log("id", id);

  return (
    <div className="annonce-page">
      <Header />
      <Carrouser />
      <Info />
      <Description />
      <Footer />
    </div>
  );
};

export default Annonce;
