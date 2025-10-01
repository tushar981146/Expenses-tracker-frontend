import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: import.meta.env.MODE === "development" ? "http://localhost:5001/api/" : " https://expences-tracker-backend.onrender.com/api/",
    withCredentials: true,
});


axiosInstance.interceptors.response.use(
    response => response,
    error => {
        if (error.message === 'Network Error') {
            console.error('CORS/Network Error. Check backend configuration.');
        };

        if (error.response?.status === 401) {
            console.error('Unauthorized access');
        };

        return Promise.reject(error);
    }
);
