// Función para extraer menciones del mensaje
// Expresión regular para encontrar menciones
// Buscar todas las menciones en el mensaje
// Devolver las menciones encontradas

function extraerMenciones(mensaje) {
    const regex = /@(\w+)/g;
    const menciones = mensaje.match(regex);
    return menciones ? menciones.map(mencion => mencion.replace('@', '')) : [];
}

module.exports = extraerMenciones;

// Cuando el usuario envíe el mensaje usando una mención
let mensaje = "Hola @profesor tengo una consulta";
let menciones = extraerMenciones(mensaje);

let mensajeConMenciones = {
    user_id: "1234",
    message: mensaje,
    mentions: menciones
};

console.log(mensajeConMenciones);

