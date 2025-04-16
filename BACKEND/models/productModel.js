//BACKEND/models/productModel.js
const db = require('../config/db');

class ProductModel{

    //función para obtener todos los productos de la tabla productos
    async getAllProducts(){
        const result = await db.query('SELECT * FROM producto');
        return result.rows;
    }

    //función para obtener un registro por su ID
    async getProductById(){
        const result = await db.query('SELECT * FROM producto WHERE id = $1',[id]);
        return result.rows[0];
        //Retorna el primer producto (deberia ser único por el ID)
    }

    //funcion para crear un nuevo registro
    async createProduct({nombre, precio, descripcion}){
        const result = await db.query(
            //Utilizando los placeholders (valores)
            'INSERT INTO producto (nombre, precio, descripcion) VALUES ($1, $2, $3) RETURNING *',
            [nombre, precio, descripcion]
        );
        return result.rows[0];
    }

    //funcion para actualizar producto
    async UpdateProduct(id, {nombre, precio, descripcion}){
        const result = await db.query(
            //Utilizando los placeholders (valores)
            'UPDATE producto SET nombre = $1, precio = $2, descripcion = $3 WHERE id = $4 RETURNING *',
            [nombre, precio, descripcion, id]
        );
        return result.rows[0];
    }

    //funcion para eliminar producto
    async deleteProduct(id){
        await db.query('delete from producto where id = $1',[id]);
    }
}

// ayuda a exportar
module.exports = ProductModel();
