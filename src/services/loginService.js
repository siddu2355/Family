import http from "./httpService";
import config from "../config/config.json";

export function loginUser(email, password) {
  return http.post(config.apiEndpoint + "/login", {
    email: email,
    password: password,
  });
}
