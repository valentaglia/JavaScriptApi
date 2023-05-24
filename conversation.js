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


try {

    app.createConversation("prueba@gmail.com")
    console.log(result)
} catch (e) {
    console.log(e.message)
}

//Metodo eliminado de App.js
/*
createConversation(email){
    const receiver = this.user.findContact(email)
    const conversation = new Conversation(this.user, receiver);
    conversation.sendMessage()
}
*/
