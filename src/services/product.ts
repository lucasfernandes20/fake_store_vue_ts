import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export interface ProductRequest {
  limit?: number;
  sort?: "desc" | "asc";
}

export interface Product {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  rating: { rate: number; count: number };
  image: string;
}

async function getProducts(
  requestOptions: ProductRequest
): Promise<Array<Product>> {
  let productUri = `${API_URL}/products`;
  if (requestOptions.limit) {
    productUri += `?limit=${requestOptions.limit}`;
  }
  if (requestOptions.sort) {
    productUri += `&sort=${requestOptions.sort}`;
  }
  const response = await axios.get(productUri);
  return response.data;
}

export const productService = {
  getProducts,
};
