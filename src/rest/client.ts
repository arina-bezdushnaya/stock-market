import axios from "axios";

const baseURL = 'https://www.alphavantage.co';


export const client = axios.create({
  baseURL
});


client.interceptors.response.use(undefined, error => {
  window.location.href = '/';
});
