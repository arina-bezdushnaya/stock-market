import axios from 'axios';

// const baseURL = 'https://stockmarket-platform.onrender.com';
const baseURL = 'http://localhost:3001';
// const baseURL = 'https://www.alphavantage.co';


export const client = axios.create({
  baseURL,
});

client.interceptors.response.use(undefined, error => {
  console.log(error.message);
});
