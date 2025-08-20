import axios from "axios";
import { ACCESS_TOKEN } from "./constants";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
    withCredentials: true,
});

api.interceptors.request.use(
    (config) => {
        // Attach token if available
        const token = localStorage.getItem(ACCESS_TOKEN);
        if (token) {
            config.headers = config.headers || {};
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

export default api;