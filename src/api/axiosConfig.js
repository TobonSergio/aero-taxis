import axios from "axios";

// URL base de tu backend en Render
const BASE_URL =
  process.env.REACT_APP_API_URL || "https://aero-taxis-backend.onrender.com";

console.log("BASE_URL:", BASE_URL);

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor para agregar token automáticamente (excepto login/register/verify)
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    // 🔑 Endpoints públicos donde NO se debe enviar el token
    const isPublicAuthEndpoint = /\/api\/auth\/(login|register|verify|register\/email)/.test(
      config.url || ""
    );

    if (token && !isPublicAuthEndpoint) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Interceptor para manejar errores globales
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem("token");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
