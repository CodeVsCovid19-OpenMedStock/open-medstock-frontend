import axios from "axios";

const http = axios.create({
  baseURL: process.env.VUE_APP_API_URL || "https://api.openmedstock.org"
});

http.interceptors.request.use(config => {
  config.headers["Authorization"] = "Bearer 1";
  return config;
});

export default http;
