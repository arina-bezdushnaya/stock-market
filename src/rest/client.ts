import axios from 'axios';

const baseURL = 'https://stockmarket-platform.onrender.com';

export const client = axios.create({
  baseURL,
});

client.interceptors.response.use(undefined, error => {
  console.log(error.message);
});
