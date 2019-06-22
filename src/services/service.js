import axios from 'axios';
import { CURRENT_WEATHER } from '@/constants'; // URL with queries and API key

const apiClient = axios.create({ // create promise
  baseURL: CURRENT_WEATHER,
  withCredentials: false, // CORS
  headers: { // some HTTP headers
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default {
  getWeather() { // function that is used in store.js 👆
    return apiClient.get();
  },
};
