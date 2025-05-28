import axios from 'axios';

const api = axios.create({
    baseURL: 'http://10.81.205.22:3333'
});

export default api;