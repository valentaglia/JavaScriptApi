const extraerMenciones = require('../utils/extraerMenciones');


class Chat {
    constructor(user) {
        this.users = [];
        this.currentUser = user;
    }

    sendMessage(message) {
        this.currentUser.enviarMensaje(message);
    }
}

module.exports = Chat;
