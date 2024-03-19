import axios from "axios";
const endpointProducts =
  "https://65f8654ddf151452460f4872.mockapi.io/api/inventory/products";

async function getAllProdructs() {
  const response = await axios.get(endpointProducts);
  return response.data;
}

export default { getAllProdructs };
