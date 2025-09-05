import React, { useState } from "react";
import axios from "../api/axiosConfig";
import "../styles/register.css";
import logo from "../assets/logo-taxis-rojos-aero-2.jpeg";
import NavigationBar from "../components/Navbar";

const Register = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  
  // ✅ Eliminamos la línea: const [isEmailRegistration, setIsEmailRegistration] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      // ✅ Eliminamos la lógica 'if/else' y dejamos solo el registro completo
      const response = await axios.post("/api/auth/register", {
        name,
        lastName,
        email,
        number,
        username,
        password,
      });
      setSuccess(response.data);
    } catch (err) {
      setError(err.response?.data || "Ocurrió un error al registrar el usuario");
    }
  };

  return (
    <>
      <NavigationBar />
      <div className="main-container-register">
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

        <div className="register-left">
          <form className="register-form" onSubmit={handleSubmit}>
            <h2>Regístrate</h2>
            {error && <p className="error">{error}</p>}
            {success && <p className="success">{success}</p>}

            {/* ✅ Eliminamos la renderización condicional. Todos los campos están siempre visibles. */}
            <div className="form-group">
              <label htmlFor="name">Nombre</label>
              <input
                type="text"
                id="name"
                placeholder="Ingresa tu nombre"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="lastName">Apellido</label>
              <input
                type="text"
                id="lastName"
                placeholder="Ingresa tu apellido"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Correo Electrónico</label>
              <input
                type="email"
                id="email"
                placeholder="Ingresa tu correo"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="number">Teléfono</label>
              <input
                type="tel"
                id="number"
                placeholder="Ingresa tu teléfono"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="username">Nombre de Usuario</label>
              <input
                type="text"
                id="username"
                placeholder="Crea un nombre de usuario"
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
                placeholder="Crea una contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit">
                Regístrate
            </button>
          </form>
          
          <p className="login-link">
            ¿Ya tienes una cuenta? <a href="/login">Inicia Sesión</a>
          </p>
        </div>

        <div className="register-right">
          <img src={logo} alt="Logo taxis aeropuerto" />
        </div>
      </div>
    </>
  );
};

export default Register;