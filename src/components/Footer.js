import React from "react";
import logo from "../img/logo-footer.png";

const Footer = () => {
  return (
    <footer>
      <img src={logo} className="footer-logo" alt="Logo Kasa" />
      <p className="footer-text">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;
