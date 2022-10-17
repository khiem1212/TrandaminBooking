import axios from "axios";

const instance = axios.create({
  baseURL: "https://airbnbnew.cybersoft.edu.vn",
  headers: {
    TokenCybersoft:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJGcm9udCBFbmQgNzIiLCJIZXRIYW5TdHJpbmciOiIxNC8wMi8yMDIzIiwiSGV0SGFuVGltZSI6IjE2NzYzMzI4MDAwMDAiLCJuYmYiOjE2NTAzODc2MDAsImV4cCI6MTY3NjQ4MDQwMH0.e3UrKdKqwFislz0cqribEEthuaW4HOuD4xwr1CTRQwg",
  },
  timeout: 10000,
});

//interceptors

instance.interceptors.request.use((config) => {
  config.headers = {
    ...config.headers,
    token:  localStorage.getItem("token"),
   
  };
  
  return config;
});

export default instance;
