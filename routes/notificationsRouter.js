const router = require('express').Router()
const NotificationController = require('../src/controllers/NotificationController')
const controller = new NotificationController

// http://localhost:3001/roles
router.get('/', controller.index) // /roles
router.get('/:id', controller.show) // /roles/:id
router.post('/', controller.create) // /roles
router.put('/:id', controller.update) // /roles/:id
router.delete('/:id', controller.delete) // /roles/:id

module.exports = router