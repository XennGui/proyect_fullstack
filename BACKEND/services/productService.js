// BACKEND/services/productService.js

const productModel = require('../models/productModel');

class ProductService {
    // Obtener productos por cliente_id
    async getProductsByClientId(cliente_id) {
        return await productModel.getProductsByClientId(cliente_id);
    }

    // Obtener todos los productos
    async getProducts() {
        return await productModel.getAllProducts();
    }

    //Obtiene producto por ID
    async getProductById(id) {
        return await productModel.getProductById(id);
    }

    //Crear un producto
    async addProduct({ nombre, precio, descripcion, cliente_id }) {
        return await productModel.createProduct({ nombre, precio, descripcion, cliente_id });
    }

    //Actualizar un producto
    async modifyProduct(id, { nombre, precio, descripcion, cliente_id }) {
        return await productModel.updateProduct(id, { nombre, precio, descripcion, cliente_id });
    }

    // Eliminar un producto
    async removeProduct(id) {
        return await productModel.deleteProduct(id);
    }
}

module.exports = new ProductService();
