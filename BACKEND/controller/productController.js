//BACKEND/controller/productController.js
const productService = require('../services/productService');

class productController{
    //req y res son objetos
    async getProducts(req, res){
        try{
            const products = await productService.getProducts();
            res.json(products);
        } catch(error){
            console.error(error);
            res.status(500).json({message: 'Error al obtener los productos'});
        }
    }

    async getProductById(req, res){
        const { id } = req.params;
        try{
            const product = await productService.getProductById(id);
            if(!product){
                return res.status(404).json({ message: 'producto no encontrado' });
            }
            res.json(product);
        }catch(error){
            console.error(error);
            res.status(500).json({message: 'Error al obtener el producto'});
        }
    }
}