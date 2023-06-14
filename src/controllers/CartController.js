const {createCart} = require("../services/createCart")
const CartRepository = require("../repositories/CartRepository")

class CartController {
    constructor() {
        this.repo = new CartRepository()
    }
    index = (req, res) => {
        res.json(this.repo.read())
    }
    show = (req, res) => {
        let cart = this.repo.findById(req.params.id)
        if (cart !== null && cart !== undefined) {
            res.status(200).json(cart)
        } else {
            res.status(404).end("Carrito no encontrado")
        }
    }
    create = (req, res) => {
        try {
            createCart(req.body)
            res.status(201).end("Created")
        } catch (e) {
            res.status(400).end(e.message)
        }
    }
    update = (req, res) => {

    }
    delete = (req, res) => {
        
    }
}
module.exports = CartController