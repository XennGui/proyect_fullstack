// BACKEND/models/productModel.js

const db = require('../config/db');

class ProductModel {

    // Obtener todos los productos con datos del cliente
    async getAllProducts() {
        const result = await db.query('SELECT * FROM producto');
        return result.rows;
    }

    // Obtener productos por cliente_id
    async getProductsByClientId(cliente_id) {
        const result = await db.query(
            `SELECT p.id, p.nombre, p.precio, p.descripcion, p.creado_en
         FROM producto p
         WHERE p.cliente_id = $1`,
            [cliente_id]
        );
        return result.rows;
    }


    //Función para obtener un registro por su ID
    async getProductById(id) {
        const result = await db.query('SELECT * FROM producto WHERE id = $1', [id]);
        return result.rows[0];
    }

    //Crear un producto, asociando un cliente (cliente_id) en caso no este asociado se almacenarà como null
    async createProduct({ nombre, precio, descripcion, cliente_id }) {
        const result = await db.query(
            `INSERT INTO producto (nombre, precio, descripcion, cliente_id) 
            VALUES ($1, $2, $3, $4) RETURNING *`,
            [nombre, precio, descripcion, cliente_id]
        );
        return result.rows[0];
    }

    // Actualizar producto por ID
    async updateProduct(id, { nombre, precio, descripcion, cliente_id }) {
        const result = await db.query(
            `UPDATE producto SET nombre = $1, precio = $2, descripcion = $3, cliente_id = $4 
            WHERE id = $5 RETURNING *`,
            [nombre, precio, descripcion, cliente_id, id]
        );
        return result.rows[0];
    }

    //Eliminar producto
    async deleteProduct(id) {
        await db.query('DELETE FROM producto WHERE id = $1', [id]);
    }
}

module.exports = new ProductModel();
