const router = require('express').Router()
const MeetingController = require('../src/controllers/MeetingController')
const validator = require('../src/middleware/invitarReunionMiddleware')
const MeetController = require('../src/controllers/MeetController')
const controller = new MeetController()
const validation = require('../src/middlewares/meetValidationMiddelware')

// http://localhost:3001/roles
router.get('/', controller.index) // /meet
// router.get('/:id', meetController.show) // /roles/:id
router.post('/', controller.create) // /roles
router.post('/:id/add-guest', validator, controller.invitarGuest);
// router.put('/:id', meetController.update) // /roles/:id
// router.delete('/:id', meetController.delete) // /roles/:id

module.exports = router