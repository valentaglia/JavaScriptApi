const router = require('express').Router()

const MentionsController = require('../src/controllers/MentionsController');

const controller = new MentionsController();

router.post('/extract', controller.extractMentions);
// Ruta para obtener todas las menciones
router.get('/', controller.index);

// Ruta para crear una nueva mención
router.post('/', middleware, controller.create);

// Ruta para actualizar una mención por su ID
router.put('/:id',middleware, controller.update);

// Ruta para eliminar una mención por su ID
router.delete('/:id', controller.delete);
module.exports = router;
