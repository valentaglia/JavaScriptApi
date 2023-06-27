const router = require('express').Router()
const ConversorController = require('../src/controllers/ConversorController')
const controller = new ConversorController()

router.post('/convertir', (req, res) => {
    const rutaImgPNG = req.body.rutaImgPNG

    controller.convertirImgAjpg(rutaImgPNG)

    res.send('Imagen convertida exitosamente')
})

router.get('/', controller.index)

module.exports = router