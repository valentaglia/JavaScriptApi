//CONVERTIR IMG A JPG

const sharp = require('sharp');
const path = require('path');

function convertirImgAjpg(rutaImgPNG) {
  try {
    const rutaImgJpg = path.join(path.dirname(rutaImgPNG), path.basename(rutaImgPNG, '.png') + '.jpg');

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

const archivo = './img/perro.png';
convertirImgAjpg(archivo);