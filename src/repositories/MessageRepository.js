class MessageRepository extends Repository {
    constructor() {
      this.messages = [];
    }
  
    addMessage(message) {
      this.messages.push(message);
    }
  
    getMessageById(id) {
      return this.messages.find(message => message.id === id);
    }
  }
  
  module.exports = MessageRepository;