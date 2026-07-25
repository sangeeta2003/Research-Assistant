import axios from "axios";

const api = axios.create({
  baseURL: "https://research-assistant-rj4p.onrender.com/",
});

export default api;