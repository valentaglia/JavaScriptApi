const Product = require('../models/Product')

class ProductFactory {
    static make(obj){
        let product = new Product;

        product.setName(obj.name);
        product.setPrice(obj.price);
        product.setCurrency(obj.currency);
        product.setStock(obj.stock);

        return product;
    }


}

module.exports = ProductFactory