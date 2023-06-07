
const ExifParser = require('exif-parser');
const mime = require('mime-types');
const MetaDataFunc = require('../src/meta-data-func');
const filePath = './imagen-metadata.jpg';
const fileContent = MetaDataFunc.loadFileEnVariable(filePath);
const MetadataApp = require('../src/MetadataApp');

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



// Instancia de la clase MetadataApp
const metadataapp = new MetadataApp

try {
    const result = metadataapp.saveMetadata(
      stringCortada,
      mimeImagen,
      `${datosObtenidos.imageSize.width}px`,
     `${datosObtenidos.imageSize.height}px`
    )

    console.log(result)
} catch (e) {
    console.log(e.message)
}

const resfindById = metadataapp.findIdMetadata(1686103460837)
console.log(resfindById.getId())
