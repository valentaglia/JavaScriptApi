const ConversorController = require('./controllers/ConversorController')

const archivo = './img/perro.png'
const controller = new ConversorController()

controller.convertirImgAjpg(archivo)