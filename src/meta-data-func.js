//Consulta para el profesor, Crear el directorio Functions, para meter archivos de Funciones que tenga el proyecto?

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
  },
  extaerTextoAntesDeBarra : function (stringCompleto){
    const indiceBarra = stringCompleto.indexOf('/'); //El metodo indexOf encuentrar la posicion del caracter que se pasa por parametro
    return stringCompleto.substring(0,indiceBarra); // el metodo substring corta el string por posiciones, en este caso desde la 0 hasta la posicion que ocntiene la "/"

  }


  
}