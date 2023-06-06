//Conversación entre dos usuarios

//Un usuario puede iniciar una conversación con otro
// Busco al usuario con quien voy a conversar
//const other = users.find('email@example.com')
// Inicio una conversación especificando el usuario
//const conversation = new Conversation(other)

//Si hacemos un console.log la conversation debe tener lo siguiente:
/*
{
"initiator_id" : "12",
"receiver_id" : "1234",
"blocked" : false,
"blocked_by"": null,
}
*/

const ContactRepository = require("./src/repositories/ContactsRepository");
const UserRepository = require('./src/repositories/UserRepository')
const Conversation = require('./src/models/Conversation')

const users = new UserRepository()
const contacts = new ContactRepository()
try {
    const user = users.byId(1684290851998)
    const receiver = contacts.findByEmail("prueba@gmail.com")
    
    const conversation = new Conversation(user, receiver)
} catch (e) {
    console.log(e.message)
}

