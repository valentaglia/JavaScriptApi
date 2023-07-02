const ProductFactory = require('../src/factories/ProductFactory')
const ProductRepository = require('../src/repositories/ProductRepository')
const validator = require('./validators/productValidator')

module.exports ={
createProduct(name, price, currency, stock){
    validator.nameNotEmpty(name)
    validator.nameCantBeNumber(name)
    validator.nameTooLong(name)
    validator.nameTooShort(name)
    validator.nonExistentCurrency(currency)
    validator.priceLowerZero(price)
    validator.priceNotANumber(price)
    validator.stockLowerZero(stock)
    validator.stockNotInteger(stock)
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