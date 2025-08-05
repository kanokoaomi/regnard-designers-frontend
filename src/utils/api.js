import axios from "axios";

export const api = axios.create({
  baseURL: "https://regnard-designers-backend-production.up.railway.app/",
  // baseURL: "http://localhost:3000/",
  //   headers: { "Content-Type": "application/json" },\
  withCredentials: true,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token"); 
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});