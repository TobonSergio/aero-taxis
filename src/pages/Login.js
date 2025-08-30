// src/pages/Login.js
import React, { useState } from "react";
import axios from "../api/axiosConfig";
import { useAuth } from "../hooks/useAuth";
import "../styles/login.css";
import logo from "../assets/logo-taxis-rojos-aero-2.jpeg";

const Login = () => {
    const { login } = useAuth();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        try {
            const response = await axios.post("/auth/login", { username, password });
            const token = response.data.token;
            login(token);
            window.location.href = "/dashboard"; // redirige al dashboard
        } catch (err) {
            setError("Usuario o contraseña incorrectos");
        }
    };

    return (
        <div className="main-container">
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
                </form>
            </div>

            <div className="login-right">
                <img src={logo} alt="Logo taxis aeropuerto" />
            </div>
        </div>
    );
};

export default Login;
