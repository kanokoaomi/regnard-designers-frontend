import axios from "axios";

export const api = axios.create({
  baseURL: "https://regnard-designers-backend.onrender.com/",
  //   headers: { "Content-Type": "application/json" },
});
