//Consulta para el profesor, crear una no la carpeta "Functions" bajo el directorio src??

//const fs = require('fs'); Intentando usar una funciona para cargar el archivo
const ExifParser = require('exif-parser');
const mime = require('mime-types');
const MetaDataFunc = require('./src/meta-data-func');

//const nombreRutaString = './imagen-metadata.jpg'; // se tiene que cargar desde la funciona MetaDataFunc

//const imagen = fs.readFileSync(nombreRutaString);
// Llamada a la función para cargar un archivo en una variable
const filePath = './imagen-metadata.jpg';
const fileContent = MetaDataFunc.loadFileEnVariable(filePath);
//console.log(fileContent); // Imprime el contenido del archivo por consola

//const filePath = nombreRutaString; //Lo reemplazo por el nuevo codigo
const datosImagen = ExifParser.create(fileContent);
const datosObtenidos = datosImagen.parse();
const mimeImagen = mime.lookup(filePath);
const stringCortada = MetaDataFunc.extaerTextoAntesDeBarra(mimeImagen);
//const stringCortada = "prueba"
//console.log(datosObtenidos);
// `${}` se usa para interpolar variables con texto, tambien se puede usar para realizar operaciones
//


const meta = {
  type: stringCortada,
  mime: mimeImagen,
  width: `${datosObtenidos.imageSize.width}px`,
  height: `${datosObtenidos.imageSize.height}px`
};

console.log(meta);
//console.log(mimeImagen);