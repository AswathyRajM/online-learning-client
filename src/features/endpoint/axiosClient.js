import axios from 'axios';

const apiClient = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  timeout: 10000,
  headers: {
    accept: 'application/json',
  },
});

export default apiClient;
