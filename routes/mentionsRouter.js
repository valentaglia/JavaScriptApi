// Archivo: mentionsRouter.js

const router = require('express').Router()
const MentionsController = require('../src/controllers/MentionsController');
const controller = new MentionsController();
const validation = require('../src/validators/mentionValidationMiddleware')

router.post('/extract', validation, controller.extractMentions);
router.get('/', controller.index);
router.post('/', controller.create);
router.put('/:id', validation, controller.update);
router.delete('/:id', controller.delete);

module.exports = router;
