import axios from "axios";

// URL base de tu backend
const BASE_URL = "http://localhost:8080/api";

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

// ✅ Interceptor para agregar token automáticamente (excepto en /auth/login)
axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");

        // 🚨 Evita enviar el token en la petición de login
        if (token && !config.url.includes("/auth/login")) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    (error) => Promise.reject(error)
);

// ✅ Interceptor para manejar errores globales
axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response && error.response.status === 401) {
            // Token inválido o expirado
            localStorage.removeItem("token");
            window.location.href = "/login"; // 🔄 redirige automáticamente al login
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;
