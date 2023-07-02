const validator = require('../validators/productValidator')

function middleware (req, res, next){
    try{
        let name = req.body.name
        let currency = req.body.currency
        let price = req.body.price
        let stock = req.body.stock
        validator.nameNotEmpty(name)
        validator.nameCantBeNumber(name)
        validator.nameTooLong(name)
        validator.nameTooShort(name)
        validator.nonExistentCurrency(currency)
        validator.priceLowerZero(price)
        validator.priceNotANumber(price)
        validator.stockLowerZero(stock)
        validator.stockNotInteger(stock)
    }catch(e){
        return res.status(422).end(e.message)
    }

    next()
}

module.exports = middleware