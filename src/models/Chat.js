const extraerMenciones = require('../utils/extraerMenciones');


class Chat {
    constructor() {
        this.users = {};
        this.currentUser = null;
    }


    sendMessage(message) {
        if (this.currentUser) {
            this.currentUser.enviarMensaje(message);
        } else {
            console.log("Usuario no autenticado. Inicie sesión para enviar mensajes.");
        }
    }
}

module.exports = Chat;
