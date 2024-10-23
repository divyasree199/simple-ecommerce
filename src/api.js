import axios from 'axios';

const API_URL = 'https://fakestoreapi.com/products';

// Fetch products from API
export const fetchProducts = async (page = 1, limit = 10) => {
  const response = await axios.get(`${API_URL}?limit=${limit}&page=${page}`);
  return response.data;
};
