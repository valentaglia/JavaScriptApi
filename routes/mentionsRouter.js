const router = require('express').Router()

const MentionsController = require('../src/controllers/MentionsController');
const validator = require('../src/validators/mentionValidator')

const controller = new MentionsController();



function middleware(req, res, next) {

    try {
        validator.messageNotEmpty(req.body.name)
        validator.messageLength(req.body.name)
    } catch (e) {
        return res.status(400).end(e.message);

    }
    next()
}

function authorize(req, res, next) {

}


router.post('/extract', controller.extractMentions);
// Ruta para obtener todas las menciones
router.get('/', controller.index);

// Ruta para crear una nueva mención
router.post('/', middleware, controller.create);

// Ruta para actualizar una mención por su ID
router.put('/:id', middleware, controller.update);
//funcion que recibe la petición antes que el metodo final del controlador
// Ruta para eliminar una mención por su ID
router.delete('/:id', controller.delete);
module.exports = router;
