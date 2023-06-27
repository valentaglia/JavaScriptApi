//CONVERTIR IMG A JPG

const sharp = require('sharp');
const path = require('path');

class ConversorController {

    constructor(){
        this.conversor = new ConversorController()
    }

    index = (req, res) => {
        res.send()
    }

    convertirImgAjpg(rutaImgPNG) {
        try {
            const rutaImgJpg = path.join(path.dirname(rutaImgPNG), path.basename(rutaImgPNG, '.png') + '.jpg')

            sharp(rutaImgPNG)
                .jpeg()
                .toFile(rutaImgJpg, (error, info) => {
                    if (error) {
                        console.log('Error al convertir la imagen', error);
                        return;
                    }
                    console.log('Resultado exitoso', info);
                });
        } catch (error) {
            console.log('Error al leer la imagen', error);
        }
    }

}

module.exports = ConversorController