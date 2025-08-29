import React, { useState } from "react";
import axios from "../api/axiosConfig";
import "../styles/login.css";
import logo from "../assets/logo-taxis-rojos-aero-2.jpeg"; // imagen derecha

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.post("/auth/login", { username, password });
      const token = response.data.token;
      localStorage.setItem("token", token);
      window.location.href = "/dashboard";
    } catch (err) {
      setError("Usuario o contraseña incorrectos");
      
    }
  };

  return (
    <div className="main-container">
      {/* divisor ondulado */}
      <div className="wave-divider">
        <svg
          viewBox="0 0 200 800"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="
              M0,0 
              C80,150 40,400 80,650
              S40,800 0,800
              L200,800 
              L200,0 
              Z
            "
            fill="#ffffffff"
          />
        </svg>
      </div>

      {/* lado izquierdo: login */}
      <div className="login-left">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>Iniciar Sesión</h2>
          {error && <p className="error">{error}</p>}

          <div className="form-group">
            <label htmlFor="username">Usuario</label>
            <input
              type="text"
              id="username"
              placeholder="Ingresa tu usuario"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              placeholder="Ingresa tu contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit">Entrar</button>
          <a href="/forgot-password" className="forgot-password">
            ¿Olvidaste tu contraseña?
          </a>
        </form>
      </div>

      {/* lado derecho: imagen */}
      <div className="login-right">
        <img src={logo} alt="Logo taxis aeropuerto" />
      </div>
    </div>
  );
};

export default Login;
