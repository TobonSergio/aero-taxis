import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Landing from "./pages/landing";  
import Login from "./pages/Login";     
import Register from "./pages/Register";
import Dashboard from "./pages/dashboard"; 
import OAuthCallback from './pages/OAuthCallback'; // Importa el nuevo componente

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} /> 
        <Route path="/login" element={<Login />} /> 
        <Route path="/register" element={<Register/>}/>
        <Route path="/oauth-callback" element={<OAuthCallback />} />
        <Route path="/dashboard" element={<Dashboard />} /> 
      </Routes>
    </Router>
  );
}

export default App;
