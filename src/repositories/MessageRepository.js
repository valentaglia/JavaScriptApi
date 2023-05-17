class MessageRepository {
    constructor() {
      this.messages = [];
    }
  
    addMessage(message) {
      this.messages.push(message);
    }
  
    getMessage(index) {
      return this.messages[index];
    }
  }
  
  module.exports = MessageRepository;