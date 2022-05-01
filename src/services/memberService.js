import http from "./httpService";
import config from "../config/config.json";

export function getMembers() {
  return http.get(config.apiEndpoint + "/family");
}

export function getMember(memberId) {
  return http.get(config.apiEndpoint + "/family" + memberId);
}

export function saveMember(member) {
  return http.post(config.apiEndpoint, member);
}

export function deleteMember(memberId) {
  return http.delete(config.apiEndpoint + "/family/" + memberId);
}
