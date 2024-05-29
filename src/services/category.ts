import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

async function getCategories(): Promise<Array<string>> {
  const loginUri = `${API_URL}/products/categories`;
  const response = await axios.get(loginUri);
  return response.data;
}

export const categoryServices = {
  getCategories,
};
