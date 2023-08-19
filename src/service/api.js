import axios from 'axios';

const api = axios.create({
    baseURL: 'www.themealdb.com/api/json/v1/1/lookup.php?i=52772'
});

export default api;