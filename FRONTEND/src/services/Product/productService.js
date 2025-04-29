// src/services/Product/productService.js

//Services.js contiene las finciones que interactuan con el backend para realizar
import axios from 'axios';

//La url base de nuestra API
const API_URL = "http://localhost:3000/productos";

//Funcion para obtener todos los productos (GET)
export const getProducts = () => axios.get(API_URL);

//Funcion para obtener el producto por ID (GET)
export const getProductById = (id) => axios.get(`${API_URL}/${id}`);

//Funcion para crear un producto(POST)
export const createProduct = (product) => axios.post(API_URL, product);

//Funcion para actualizar el producto (PUT)
export const updateProduct = (id, product) => axios.put(`${API_URL}/${id}`, product);

//Funcion para eliminar el producto (DELETE)
export const deleteProduct = (id) => axios.delete(`${API_URL}/${id}`);
