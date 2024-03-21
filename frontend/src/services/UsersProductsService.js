import axios from "axios";
import { backendUserProductEnpoint } from "../constants/backendEdpoint";

async function getAllUserProdructsByUserId() {
  const response = await axios.get(
    `${backendUserProductEnpoint}/${localStorage.getItem("userId")}`
  );
  return response;
}

async function getAllUserProdructs() {
  const response = await axios.get(backendUserProductEnpoint);
  return response;
}

async function createOneUserProdructs(userProduct) {
  const response = await axios.post(backendUserProductEnpoint, userProduct);
  return response;
}

export default {
  getAllUserProdructsByUserId,
  getAllUserProdructs,
  createOneUserProdructs,
};
