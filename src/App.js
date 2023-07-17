import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Pages/About";
import Annonce from "./Pages/Annonce";
import Error from "./Pages/Error";
import Home from "./Pages/Home";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/annonce/:id" exact element={<Annonce />} />
        <Route path="/About" exact element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
