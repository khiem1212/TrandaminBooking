import axios from "axios";

const instance = axios.create({
  baseURL: "https://airbnbnew.cybersoft.edu.vn/swagger/index.html",
  headers: {
    TokenCybersoft:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJGcm9udCBFbmQgNzIiLCJIZXRIYW5TdHJpbmciOiIzMS8wMS8yMDIzIiwiSGV0SGFuVGltZSI6IjE2NzUxMjMyMDAwMDAiLCJuYmYiOjE2NTAzODc2MDAsImV4cCI6MTY3NTI3MDgwMH0.AIuCmZwqwz4ytkjLFFDsoctOuwji561du2mf20MNwnc",
  },
  timeout: 10000,
});

//interceptors

instance.interceptors.request.use((config) => {
  config.headers = {
    ...config.headers,
    token: "Bearer " + localStorage.getItem("token"),
  };
  return config;
});

export default instance;
