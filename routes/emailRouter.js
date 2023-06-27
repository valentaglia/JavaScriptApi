const router = require('express').Router()
const EmailController = require('../src/controllers/EmailController')
const controller = new EmailController

router.post('/', controller.sendEmail) 

module.exports = router