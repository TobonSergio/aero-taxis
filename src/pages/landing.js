import React from "react";
import { Link } from "react-router-dom";
import "../styles/landing.css";
import NavigationBar from "../components/Navbar";
import taxisCuatroPalzas from "../assets/taxis-4-plazas-3.jpg"

const Landing = () => {
  return (
    <div>
      <NavigationBar />
      <div className="scroll-container"> {/* Contenedor que maneja el scroll */}
        {/* HERO */}
        <section id="home" className="hero">
          <h1>Tu transporte seguro desde el aeropuerto</h1>
          <p>Reserva tu taxi aéreo en México antes de viajar y llega a tu destino sin complicaciones</p>
          <a href="#services" className="btn-primary">Conoce nuestros servicios</a>
        </section>

<section id="services" className="services-section">
  <h2>Servicios</h2>
  <div className="services-grid">
    <div className="service-card">
      <h3>🚕 Taxi Normal</h3>
        <img src={taxisCuatroPalzas} alt="Taxi Normal" className="service-image" />
      <p>Traslado rápido y seguro en taxis de 4 plazas.</p>
    </div>
    <div className="service-card">
      <h3>🚌 Taxi Turístico</h3>
      <img src={taxisCuatroPalzas} alt="Taxi Turístico" class="service-image" />
      <p>Vehículos de más plazas para grupos y recorridos turísticos.</p>
    </div>
    <div className="service-card">
      <h3>🌍 Chofer Bilingüe</h3>
      <img src={taxisCuatroPalzas}alt="Chofer Bilingüe" class="service-image" />
      <p>Conduce en Español e Inglés para tu comodidad.</p>
    </div>
    <div className="service-card">
      <h3>📅 Reservas por días</h3>
      <img src={taxisCuatroPalzas} alt="Reservas por días" class="service-image" />
      <p>Elige entre un traslado único o múltiples días de servicio.</p>
    </div>
  </div>
</section>

        {/* SOBRE NOSOTROS */}
        <section id="about" className="about-section">
          <h2>Sobre Nosotros</h2>
          <p>
            En <strong>Aero Taxis México</strong> ofrecemos un servicio especializado en traslados desde y hacia el aeropuerto.
            Nuestro objetivo es que disfrutes de un transporte seguro, confiable y adaptado a tus necesidades desde el primer momento que llegas a México.
            Con choferes capacitados, opciones bilingües y vehículos cómodos, hacemos que tu viaje comience de la mejor manera.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Landing;