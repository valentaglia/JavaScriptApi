const router = require ('express').Router()
const CartController = require('../src/controllers/CartController')
const controller = new CartController()
const validator = require('../src/middlewares/cartValidationMiddelware')

router.get ('/', controller.index)
router.get ('/:id', controller.show)
router.post('/', validator.validate, controller.create)
router.put ('/:id', controller.update)
router.delete ('/:id', controller.delete)

module.exports= router