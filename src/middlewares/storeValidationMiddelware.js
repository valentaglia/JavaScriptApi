const { nameLenght, validWebSite } = require("../validators/createStoreValidator")
const StoreFactory = require("../factories/StoreFactory")
module.exports = {
    validate: (req, res, next) => {
        try {
            validWebSite(req.body.website)
            nameLenght(req.body.name)
            req.body = StoreFactory.make(req.body)
        } catch (e) {
            return res.status(422).end(e.message)
        }
        next()
    }
}
