const router = require('express').Router()
const CategoryController = require('../src/controllers/CategoryController')
const controller = new CategoryController
const validator = require('../src/middlewares/categoryValidatorMiddleware')

router.get('/', controller.index)
router.get('/:id', controller.show)
router.post('/', validator, controller.create) 
router.put('/:id', controller.update) 
router.delete('/:id', controller.delete) 

module.exports = router