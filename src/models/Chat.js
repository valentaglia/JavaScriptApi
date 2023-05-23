const extraerMenciones = require('../utils/extraerMenciones');


class Chat {
    constructor() {
        this.users = [];
        this.currentUser = null;
    }


    sendMessage(message) {
       
            this.currentUser.enviarMensaje(message);
        
    }
}

module.exports = Chat;
