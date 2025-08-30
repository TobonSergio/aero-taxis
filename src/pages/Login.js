import React, { useState } from "react";
import axiosInstance from "../api/axiosConfig";
import "../styles/login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axiosInstance.post("/auth/login", { username, password });
      const token = response.data.token;
      localStorage.setItem("token", token);
      window.location.href = "/dashboard";
    } catch (err) {
      setError("Usuario o contraseña incorrectos");
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Entrar</button>
      {error && <p>{error}</p>}
    </form>
  );
};

export default Login;
