import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

async function getCategories(): Promise<Array<string>> {
  const CategoryUri = `${API_URL}/products/categories`;
  const response = await axios.get(CategoryUri);
  return response.data;
}

export const categoryServices = {
  getCategories,
};
