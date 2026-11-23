import axios from 'axios';

const backendOrigin = import.meta.env.VITE_API_BASE_URL.replace(/\/+$/, '');

export const api = axios.create({ baseURL: `${backendOrigin}/api` });

export const imageUrl = (filename) => `${backendOrigin}/images/${filename.replace(/^\/+/, '')}`;
