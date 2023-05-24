const {createProductValidator} = require('./validators/createProductValidator')
const ProductFactory = require('./factories/ProductFactory')
const ProductRepository = require('./repositories/ProductRepository')

module.exports ={
createProduct(name, price, currency, stock){
    createProductValidator(name, price, currency, stock)
    const product = ProductFactory.make({
        name,
        price,
        currency,
        stock
    })
    const repo = new ProductRepository
    repo.create(product)
    return product
}

}