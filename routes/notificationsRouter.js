const router = require('express').Router();
const NotificationController = require('../src/controllers/NotificationController');
const controller = new NotificationController;
const validation = require("../src/middlewares/notificationsValidationMiddleware");

// http://localhost:3001/notifications
router.get('/', controller.index) // /notifications
router.get('/:id', controller.show) // /notifications/:id
router.post('/', validation, controller.create) // /notifications
router.put('/:id', validation, controller.update) // /notifications/:id
router.put('/read/:id', controller.read) // /notifications/:id
router.delete('/:id', controller.delete) // /notifications/:id
router.delete('/', controller.deleteAll) // /notifications

module.exports = router