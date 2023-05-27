const fs = require('fs'); // Importamos el módulo 'fs' para manejar archivos
module.exports = {
  loadFileEnVariable: function (filePath) {
    try {
      const fileContent = fs.readFileSync(filePath); // Leemos el archivo y almacenamos su contenido en una variable, pasando el parametro utf8 veo la cadena de Strings y no el contenido binario del archivo
      return fileContent;
    } catch (error) {
      console.error('Error al cargar el archivo:', error);
      return null;
    }
  }
}