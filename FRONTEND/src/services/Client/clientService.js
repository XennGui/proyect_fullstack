// src/services/Client/clientService.js

import axios from 'axios';

const API_URL = "http://localhost:3000/clientes";

export const getClients = () => axios.get(API_URL);
export const getClientByDNI = (dni) => axios.get(`${API_URL}/${dni}`);
export const getProductCountByClient = (dni) => axios.get(`${API_URL}/productos/count/${dni}`);
export const createClient = (client) => axios.post(API_URL, client);
export const updateClient = (id, client) => axios.put(`${API_URL}/${id}`, client);
export const deleteClient = (dni) => axios.delete(`${API_URL}/${dni}`);