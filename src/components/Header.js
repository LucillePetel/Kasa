import React from "react";
import logo from "../img/logo-header.png";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <img src={logo} className="header-logo" alt="Logo Header" />
      </Link>
      <nav className="nav">
        <NavLink to="/" className={({ isActive }) =>
						isActive ? 'nav-active' : 'nav-link'
					}>
          <div>Accueil</div>
        </NavLink>
        <NavLink to="/about" className={({ isActive }) =>
						isActive ? 'nav-active' : 'nav-link'
					}>
          <div>A Propos</div>
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
