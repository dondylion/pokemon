import axios from 'axios';

const API = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/',
    withCredentials: false,
});

export default API;