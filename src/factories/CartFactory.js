const Cart = require("../models/Cart")

class CartFactory {
    static make(obj){
        let cart = new Cart()
        cart.setUserId(obj.user_id)
        cart.setItems(obj.items)
        return cart
    }
}
module.exports = CartFactory