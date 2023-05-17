const Message = require('./src/models/Message');

//Reacción a mensajes
//Existen dos tipos de reacciones: Like y Dislike
//Busco el mensaje que voy a reaccionar
const message = new Message()

const mensajeEncontrado = message.find(1)

//Reacciono al mensaje con like
mensajeEncontrado.Like();
console.log(mensajeEncontrado.getLikes())

//O reacciono con dislike
mensajeEncontrado.Dislike();
console.log(mensajeEncontrado.getDislikes())

//O anulo el divisible invocando de nuevo al mismo método
mensajeEncontrado.Dislike();
console.log(mensajeEncontrado.getDislikes())



