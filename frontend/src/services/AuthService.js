import axios from "axios";
import { backendAuthEnpoint } from "../constants/backendEdpoint";

async function login(user) {
  const response = await axios.post(`${backendAuthEnpoint}/signin`, user);
  return response;
}

async function logout() {
  localStorage.removeItem("rol");
  return;
}

export default { login, logout };
