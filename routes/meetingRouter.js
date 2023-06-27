const router = require('express').Router()
const MeetingController = require('../src/controllers/MeetingController')

const controller = new MeetingController();


router.get('/', controller.index);
router.get('/:id', controller.show); 
router.post('/', controller.create);
router.put('/:id', controller.update); 
router.delete('/:id', controller.delete); 

module.exports = router