const Factory = require('../factories/UserFactory')
class Conversation{
    
    #initiator 
    #receiver 
    //
    constructor(initiator, receiver){
        this.#receiver = this.toContact(receiver)
        this.#initiator = initiator
    }

    sendMessage(){
        console.log(this.#initiator.getId())
        let message = {
            initiator_id: this.#initiator.getId(),
            receiver_id: this.#receiver.getId(),
            blocked : false,
            blocked_by : null,
        }
        let content = JSON.stringify(message)
        console.log(content);

    }
    // devuelve el objeto user del contacto
    toContact(receiver){
        return Factory.getContact(receiver)
    }
}

module.exports = Conversation;