const Message = require('./src/models/Message');

const messageNuevo = new Message(1, "Hola");

//Reacción a mensajes
//Existen dos tipos de reacciones: Like y Dislike
//Busco el mensaje que voy a reaccionar
const message = message.find(1)

//Reacciono al mensaje con like
message.like()
console.log(message.like)

//O reacciono con dislike
message.dislike()
console.log(message.dislike)

//O anulo el divisible invocando de nuevo al mismo método
message.dislike()
console.log(message.dislike)



