import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";  // 👈 Importa el CSS
import logo from "../assets/logo-taxis-rojos-aero-2.jpeg"; // 👈 ajusta la ruta según tu proyecto

const NavigationBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top custom-navbar">
      <div className="container">
      <Link className="navbar-brand" to="/">
        <img src={logo} alt="Logo Aero Taxis" className="logo" />
      </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="/#home">Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#services">Servicios</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#about">Sobre Nosotros</a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">Iniciar Sesión</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
