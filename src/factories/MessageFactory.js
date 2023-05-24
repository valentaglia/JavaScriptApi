const Message  = require('../models/Message');

class MessageFactory {
  make(content) {
    const message = new Message(content);
    return message;
  }
}

module.exports = MessageFactory;