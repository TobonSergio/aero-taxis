import axios from "axios";

// URL base de tu backend en Render
const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "https://aero-taxis-backend.onrender.com"; // variable que defines en Vercel
console.log("BASE_URL:", BASE_URL);
const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

// Interceptor para agregar token automáticamente (excepto login)
axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");
        if (token && !config.url.includes("/auth/login")) {
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
//https://aero-taxis-backend.onrender.com
export default axiosInstance;
