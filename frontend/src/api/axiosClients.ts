// src/api/axiosClient.ts
import axios from "axios";

const axiosClient = axios.create({
    baseURL:  process.env.REACT_APP_API_BASE_URL,
    withCredentials: true, // required for cookies / CSRF
    headers: {
        "Content-Type": "application/json",
    },
});

// Request Interceptor (Attach token)
axiosClient.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("access");
        if (token && config.headers) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// Response Interceptor (Handle auth errors)
axiosClient.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            localStorage.removeItem("access");
            localStorage.removeItem("refresh");
            window.location.href = "/login";
        }
        return Promise.reject(error);
    }
);

export default axiosClient;
