//models/productServcice.js

const productModel = require('../models/productModel');
class ProductService{
    async getProducts(){
        return await productModel.getAllProducts();
    }

    async getProductById(id){
        return await productModel.getProductById(id);
    }

    async  addProduct(data){
        return await productModel.createProduct(data);
    }
    
    async  modifyProduct(id, data){
        return await productModel.updateProduct(id, data);
    }

    async  removeProduct(id){
      await productModel.deleteProduct(id);
    }
}
// data contiene todos los atributos