import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Pages/About";
import Annonce from "./Pages/Annonce";
import Error from "./Pages/Error";
import Home from "./Pages/Home";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/annonce" exact element={<Annonce />} />
          <Route path="/About" exact element={<About />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
