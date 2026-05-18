import axios from "axios";

const API = axios.create({
  baseURL: "https://employee-performance-backend-3e70.onrender.com/api",
});

API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");

  if (token) {
    req.headers.authorization = token;
  }

  return req;
});

export default API;