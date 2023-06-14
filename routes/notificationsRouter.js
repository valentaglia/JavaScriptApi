const router = require('express').Router()
const NotificationController = require('../src/controllers/NotificationController')
const controller = new NotificationController

// http://localhost:3001/notifications
router.get('/', controller.index) // /notifications
router.get('/:id', controller.show) // /notifications/:id
router.post('/', controller.create) // /notifications
router.put('/:id', controller.update) // /notifications/:id
router.delete('/:id', controller.delete) // /notifications/:id

module.exports = router