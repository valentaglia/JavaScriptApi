const MessageFactory = require('./src/factories/MessageFactory');
const MessageRepository = require('./src/repositories/MessageRepository');
const repository = new MessageRepository();
const messageFactory = new MessageFactory();

// Crear mensajes y agregarlos al repositorio
const message1 = messageFactory.createMessage("primer mensaje");
const message2 = messageFactory.createMessage("segundo mensaje");
repository.addMessage(message1);
repository.addMessage(message2);

//mensaje del repositorio
const messageIndex = 1;
const messageFromRepository = repository.getMessage(messageIndex);

//estadísticas del mensaje
const stats = messageFromRepository.getStats();
console.log(stats);

//Si hacemos console.log(stats) se muestra lo siguiente:
// {
// "views" : 46,
// "likes" : 10,
// "dislikes" : 2,
// "word_count" : 5,
// "char_count" : 65
// }