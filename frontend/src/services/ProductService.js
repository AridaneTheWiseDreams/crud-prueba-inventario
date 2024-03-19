import axios from "axios";
import { backendProductEnpoint } from "../constants/backendEdpoint";

async function getAllProdructs() {
  const response = await axios.get(backendProductEnpoint);
  return response.data;
}

async function deleteOneProdruct(id) {
  const response = await axios.delete(`${backendProductEnpoint}/${id}`);
  return response.data;
}

async function addProdruct(product) {
  const response = await axios.post(backendProductEnpoint, product);
  return response;
}

async function updateProdruct(id, product) {
  const response = await axios.put(`${backendProductEnpoint}/${id}`, product);
  return response;
}

export default {
  getAllProdructs,
  deleteOneProdruct,
  addProdruct,
  updateProdruct,
};
