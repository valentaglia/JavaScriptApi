const fs = require('fs');
const ExifParser = require('exif-parser');
const mime = require('mime-types');

const nombreRutaString = './imagen-metadata.jpg';

const imagen = fs.readFileSync(nombreRutaString);
const filePath = nombreRutaString;
const datosImagen = ExifParser.create(imagen);
const datosObtenidos = datosImagen.parse();
const mimeImagen = mime.lookup(filePath);
//console.log(datosObtenidos);
// `${}` se usa para interpolar variables con texto, tambien se puede usar para realizar operaciones
//
const meta = {
  type: datosObtenidos.thumbnailType,
  mime: mimeImagen,
  width: `${datosObtenidos.imageSize.width}px`,
  height: `${datosObtenidos.imageSize.height}px`
};

console.log(meta);
console.log(mimeImagen);