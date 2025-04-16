//BACKEND/routes/productRouters.js
const express = require('express');
const router = express.Router();
const productController = require('../controller/productController');

//Solicitud de tipo GET en la url
router.get('/',(req, res) => productController.getProducts(req, res));

//Solicitud de tipo GET en la url
router.get('/:id',(req, res) => productController.getProductById(req, res));

//Solicitud de tipo POST en la url
router.post('/',(req, res) => productController.createProduct(req, res));

//Solicitud de tipo PUT en la url
router.put('/:id',(req, res) => productController.updateProduct(req, res));

//Solicitud de tipo DELETE en la url
router.delete('/:id',(req, res) => productController.deleteProduct(req, res));

module.exports = router;
