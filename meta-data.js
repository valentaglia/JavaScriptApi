
const ExifParser = require('exif-parser');
const mime = require('mime-types');
const MetaDataFunc = require('./src/meta-data-func');
const filePath = './imagen-metadata.jpg';
const fileContent = MetaDataFunc.loadFileEnVariable(filePath);

const datosImagen = ExifParser.create(fileContent); //Se usa la libreria ExifParser para extrar el temaño de la imagen
const datosObtenidos = datosImagen.parse();
const mimeImagen = mime.lookup(filePath); //Se usa la libreria mime-types para extrar el mime del archivo
const stringCortada = MetaDataFunc.extaerTextoAntesDeBarra(mimeImagen); //Llamo a la funcion para cortar strings antes de la barra "/"



const meta = {
  type: stringCortada,
  mime: mimeImagen,
  width: `${datosObtenidos.imageSize.width}px`,
  height: `${datosObtenidos.imageSize.height}px`
};

console.log(meta);