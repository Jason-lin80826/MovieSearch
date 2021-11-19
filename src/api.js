import axios from 'axios';

const key = 'f49ea0b'
const instance = axios.create({
  baseURL: `https://www.omdbapi.com/?apikey=${key}`,
});

const config = {
  headers: { 'Content-Type': 'application/json' },
};

export const getProducts = () => instance.get('/products',config);