const CartFactory = require("./factories/CartFactory")
const CartRepository = require("./repositories/CartRepository")
const { createCartValidator } = require('./validators/createCartValidator')

module.exports = {
    createCart: function (obj) {
        createCartValidator(obj.user_id, obj.items)
        const cart = CartFactory.make(obj)
        const repo = new CartRepository
        repo.create(cart)
        return cart
    }
}
