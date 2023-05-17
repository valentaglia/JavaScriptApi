const Message  = require('../models/Message');

class MessageFactory {
  createMessage(content) {
    const message = new Message(content);
    return message;
  }
}

module.exports = MessageFactory;