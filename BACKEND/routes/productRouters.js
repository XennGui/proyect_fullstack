// BACKEND/routes/productRouters.js

const express = require('express');
const router = express.Router();
const productController = require('../controller/productController');

// GET todos los productos
router.get('/', (req, res) => productController.getProducts(req, res));

// Obtener productos por cliente_id
router.get('/by-client', (req, res) => productController.getProductsByClientId(req, res));

// GET producto por ID
router.get('/:id',(req, res) => productController.getProductById(req, res));

// POST crear producto
router.post('/', (req, res) => productController.createProduct(req, res));

// PUT actualizar producto
router.put('/:id', (req, res) => productController.updateProduct(req, res));

// DELETE eliminar producto
router.delete('/:id', (req, res) => productController.deleteProduct(req, res));

module.exports = router;
