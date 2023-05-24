const Repository = require('./Repository');
const MessageFactory = require('../factories/MessageFactory');

class MessageRepository extends Repository {
  constructor() {
    super();
    this.messages = [];
    this.nextId = 1;
  }

  addMessage(content) {
    const messageFactory = new MessageFactory();
    const message = messageFactory.make(content);
     message.id = this.nextId++;
    this.messages.push(message);
  }

  getMessageById(id) {
    return this.messages.find(message => message.id === id) || null;
  }
}

module.exports = MessageRepository;