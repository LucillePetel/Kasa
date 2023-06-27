import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <div className="error-message">
        <h1>404</h1>
        <p>Oups! La page que vous demandez n'existe pas.</p>
      </div>
      {/* Lien vers la page d'accueil */}
      <Link to="/">Retourner sur la page d’accueil</Link>
    </div>
  );
};

export default NotFound;
