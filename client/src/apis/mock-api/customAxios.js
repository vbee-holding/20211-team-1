import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BE_HOST,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem("accessToken");
  config.headers["Authorization"] = `Bearer ${
    accessToken && JSON.parse(accessToken)
  }`;
  return config;
});

export default axiosInstance;