const router = require('express').Router()
const MeetingController = require('../src/controllers/MeetingController')
const validation = require('../src/validators/meetingValidationMiddleware')
const controller = new MeetingController();


router.get('/', controller.index);
router.get('/:id', controller.show); 
router.post('/',validation, controller.create);
router.put('/:id', controller.update); 
router.delete('/:id', controller.delete); 

module.exports = router