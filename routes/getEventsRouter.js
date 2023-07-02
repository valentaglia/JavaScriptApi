const router = require('express').Router()
const CalendarController = require('../src/controllers/CalendarController')
const controller = new CalendarController

// http://localhost:3001/roles
router.get('/', controller.index) // /roles


module.exports = router