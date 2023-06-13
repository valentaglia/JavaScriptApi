const express = require('express');
const MentionsController = require('../src/controllers/MentionsController');
const router = express.Router();
const controller = new MentionsController();

router.post('/extract', controller.extractMentions);
// Ruta para obtener todas las menciones
router.get('/', controller.index);

// Ruta para crear una nueva mención
router.post('/', controller.create);

// Ruta para actualizar una mención por su ID
router.put('/:id', controller.update);

// Ruta para eliminar una mención por su ID
router.delete('/:id', controller.delete);
module.exports = router;
