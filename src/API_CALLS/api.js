import axios from "axios";

const api = axios.create({
  baseURL: "https://collegesearchbackend-production.up.railway.app",
});

export default api;
