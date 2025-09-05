import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Landing from "./pages/landing";  
import Login from "./pages/Login";     
import Register from "./pages/Register";
import Dashboard from "./pages/dashboard"; 
import OAuthCallback from './pages/OAuthCallback'; 
import Verify from "./pages/verify"; // 👈 importa tu componente Verify

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} /> 
        <Route path="/login" element={<Login />} /> 
        <Route path="/register" element={<Register/>}/>
        <Route path="/oauth-callback" element={<OAuthCallback />} />
        <Route path="/dashboard" element={<Dashboard />} /> 
        <Route path="/verify" element={<Verify />} /> {/* 👈 nueva ruta */}
      </Routes>
    </Router>
  );
}

export default App;
