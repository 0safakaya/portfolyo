import React from "react";
import "./Navbar.css";
import logo from "../jpg/kaya_yazilim_favicon.png"; // Logo dosyanın konumuna göre güncelle

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Logo" className="logo" />
        <span className="logo-text">Safa Kaya</span>
      </div>
      <ul className="navbar-links">
        <li><a href="#home">Anasayfa</a></li>
        <li><a href="#about">Ben Kimim?</a></li>
        <li><a href="#skills">Neler Yapabilirim?</a></li>
        <li><a href="#portfolio">Portfolyo</a></li>
        <li><a href="#contact">İletişim</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;