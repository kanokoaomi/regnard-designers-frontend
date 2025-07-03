import axios from "axios";

export const api = axios.create({
  baseURL: "https://regnard-designers-backend-production.up.railway.app/",
  //   headers: { "Content-Type": "application/json" },\
  withCredentials: true,
});
