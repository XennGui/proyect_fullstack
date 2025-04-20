//BACKEND/controller/productController.js

const productService = require('../services/productService');
const messages = require('../utils/errorTypes');

class ProductController {
    
    async getProductsByClientId(req, res) {
        const { cliente_id } = req.query;

        if (!cliente_id) {
            return res.status(messages.CLIENTE_ID_REQUERIDO.status).json({ message: messages.CLIENTE_ID_REQUERIDO.message });
        }

        try {
            const products = await productService.getProductsByClientId(cliente_id);
            res.json(products);
        } catch (error) {
            console.error(error);
            res.status(messages.ERROR_OBTENER_PRODUCTOS.status).json({ message: messages.ERROR_OBTENER_PRODUCTOS.message });
        }
    }

    async getProducts(req, res) {
        try {
            const products = await productService.getProducts();
            res.json(products);
        } catch (error) {
            console.error(error);
            res.status(messages.ERROR_OBTENER_PRODUCTOS.status).json({ message: messages.ERROR_OBTENER_PRODUCTOS.message });
        }
    }

    async getProductById(req, res) {
        const { id } = req.params;
        try {
            const product = await productService.getProductById(id);
            if (!product) {
                return res.status(messages.PRODUCTO_NO_ENCONTRADO.status).json({ message: messages.PRODUCTO_NO_ENCONTRADO.message });
            }
            res.json(product);
        } catch (error) {
            console.error(error);
            res.status(messages.ERROR_OBTENER_PRODUCTO.status).json({ message: messages.ERROR_OBTENER_PRODUCTO.message });
        }
    }

    async createProduct(req, res) {
        const { nombre, precio, descripcion, cliente_id } = req.body;
        try {
            const newProduct = await productService.addProduct({ nombre, precio, descripcion, cliente_id });
            res.status(messages.PRODUCTO_CREADO.status).json(newProduct);
        } catch (error) {
            console.error(error);
            res.status(messages.ERROR_CREAR_PRODUCTO.status).json({ message: messages.ERROR_CREAR_PRODUCTO.message });
        }
    }

    async updateProduct(req, res) {
        const { id } = req.params;
        const { nombre, precio, descripcion, cliente_id } = req.body;
        try {
            const updatedProduct = await productService.modifyProduct(id, { nombre, precio, descripcion, cliente_id });
            if (!updatedProduct) {
                return res.status(messages.PRODUCTO_NO_ENCONTRADO.status).json({ message: messages.PRODUCTO_NO_ENCONTRADO.message });
            }
            res.json(updatedProduct);
        } catch (error) {
            console.error(error);
            res.status(messages.ERROR_ACTUALIZAR_PRODUCTO.status).json({ message: messages.ERROR_ACTUALIZAR_PRODUCTO.message });
        }
    }

    async deleteProduct(req, res) {
        const { id } = req.params;
        try {
            await productService.removeProduct(id);
            res.status(messages.PRODUCTO_ELIMINADO.status).send();
        } catch (error) {
            console.error(error);
            res.status(messages.ERROR_ELIMINAR_PRODUCTO.status).json({ message: messages.ERROR_ELIMINAR_PRODUCTO.message });
        }
    }
}

module.exports = new ProductController();
