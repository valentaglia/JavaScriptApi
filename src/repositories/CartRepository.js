const Cart = require("../models/Cart");
const Repository = require("./Repository");

class CartRepository extends Repository {
    file = './examples/carts.json'
    create(cart) {
        if (cart instanceof Cart) {
            this.save({
                user_id: cart.getUserId(),
                items: cart.getItems(),
                subtotal: cart.getSubtotal()
            })
            return;
        }
        throw new Error('Se requiere una instancia de Cart')
    }
}
module.exports = CartRepository