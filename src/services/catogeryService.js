import config from "../config/config.json";
import http from "../services/httpService";

export function getCatogeries() {
  return http.get(config.apiEndpoint + "/catogeries");
}
