const { validUserId, validItemsAmount } = require("../validators/createCartValidator")
const CartFactory = require("../factories/CartFactory")
module.exports = {
    validate: (req, res, next) => {
        try {
            validUserId(req.body.user_id)
            validItemsAmount(req.body.items.lenght)
            req.body = CartFactory.make(req.body)
        } catch (e) {
            return res.status(422).end(e.message)
        }
        next()
    }
}
