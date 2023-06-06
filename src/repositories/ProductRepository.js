const Product = require('../models/Product')
const Factory = require('../factories/ProductFactory')
const Repository = require('./Repository')

class ProductRepository extends Repository{
    file = './products.json'

    create(product){
        if(product instanceof Product){
            this.save({
                name : product.getName(),
                price : product.getPrice(),
                currency : product.getCurrency(),
                stock : product.getStock()
            })

            return
        }

        throw new Error('Se requiere una instancia de Product')

    }

}

module.exports = ProductRepository