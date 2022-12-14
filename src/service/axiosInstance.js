import axios from "axios";

const BASE_URL = "https://14375.fullstack.clarusway.com/";

//* Token'siz api istekleri icin bir instance olustur.
export const axiosPublic = axios.create({
  baseURL: BASE_URL,
});

//* local storage'dan token'ı oku
const escapedToken = JSON.parse(localStorage.getItem("persist:root"))?.token;
const token = escapedToken && JSON.parse(escapedToken);

//* Token gerektiren istekler icin bir baska instance olusutur.
export const axiosWithToken = axios.create({
  baseURL: BASE_URL,
  headers: { Authorization: `Token ${token}` },
});

axiosWithToken.interceptors.request.use((config) => {
  console.log("interceptor run");

  if (!config.headers["Authorization"]) {
    config.headers["Authorization"] = `Token ${token}`;
  }
  return config;
});
