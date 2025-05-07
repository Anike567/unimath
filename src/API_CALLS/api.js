import axios from "axios";

const api = axios.create({
  baseURL: "http://10.182.10.93:3000",
});

export default api;
