const router = require('express').Router()
const StoreController = require('../src/controllers/StoreController')
const controller = new StoreController()
const validator = require('../src/middlewares/storeValidationMiddelware')

router.get('/', controller.index)
router.get('/:id', controller.show)
router.post('/', validator.validate, controller.create)
router.put('/:id', controller.update)
router.delete('/:id', controller.delete)

module.exports = router