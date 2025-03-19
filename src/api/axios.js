import axios from "axios";

const request = axios.create({
  baseURL: "https://dummyjson.com",
});

request.interceptors.request.use(
  function (config) {
    const lang = localStorage.getItem("site_lang");
    config.headers["Accept-Language"] = lang || "en";

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

request.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default request;
