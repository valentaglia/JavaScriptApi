const router = require('express').Router()
const ProductsController = require('../src/controllers/ProductsController')
const controller = new ProductsController

// http://localhost:3001/products
router.get('/', controller.index) // /products
router.get('/:id',controller.show) // /products/:id
router.post('/', controller.create) // /products
router.put('/:id', controller.update) // /products/:id
router.delete('/:id', controller.delete) // /products/:id

module.exports = router