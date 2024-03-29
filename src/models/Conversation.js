const Factory = require('../factories/UserFactory')
class Conversation{
    
    #initiator 
    #receiver 
    //
    constructor(initiator, receiver){
        this.#receiver = receiver
        this.#initiator = initiator
        this.info()
    }

    info(){
        let message = {
            initiator_id: this.#initiator.getId(),
            receiver_id: this.#receiver.getId(),
            blocked : false,
            blocked_by : null,
        }
        let content = JSON.stringify(message)
        console.log(content);
    }
    
}

module.exports = Conversation;