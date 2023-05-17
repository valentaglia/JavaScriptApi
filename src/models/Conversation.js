class Conversation{
    #initiator
    #receiver
    constructor(initiator, receiver){
        this.#receiver = receiver
        this.#initiator = initiator
    }

    sendMessage(){
        let message = {
            initiator_id: this.#initiator.getId(),
            receiver_id: this.#receiver.getId(),
            blocked : false,
            blocked_by : null,
        }
        console.log(message);

    }
}

module.exports = Conversation;