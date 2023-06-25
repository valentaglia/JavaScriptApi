const router = require('express').Router()
const MeetingController = require('../src/controllers/MeetingController')
const meetController = new MeetingController
const validator = require('../src/middleware/invitarReunionMiddleware')

// http://localhost:3001/roles
router.get('/', meetController.index) // /meet
// router.get('/:id', meetController.show) // /roles/:id
router.post('/', meetController.create) // /roles

router.post('/:id/add-guest', validator ,meetController.invitarGuest);
// router.put('/:id', meetController.update) // /roles/:id
// router.delete('/:id', meetController.delete) // /roles/:id

module.exports = router