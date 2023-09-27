import axios from "axios";

export function setToken(token: string) {
  localStorage.setItem("token", token);
  axios.defaults.headers.common.Authorization = token;
}

export function clearToken() {
  localStorage.removeItem("token");
  axios.defaults.headers.common.Authorization = void 0;
}

export function getToken() {
  return localStorage.getItem("token");
}
