// Función para extraer menciones del mensaje
// Expresión regular para encontrar menciones
// Buscar todas las menciones en el mensaje
// Devolver las menciones encontradas

function extraerMenciones(mensaje) {
    const regex = /@(\w+)/g;
    const menciones = mensaje?.match(regex);
    return menciones ? menciones.map(mencion => mencion.replace('@', '')) : [];
}

module.exports = extraerMenciones;


