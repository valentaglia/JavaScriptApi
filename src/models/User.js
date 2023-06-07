const extraerMenciones = require('../utils/extraerMenciones');

class User {
    

    constructor() {
        this.id = null;
        this.email = null;
        this.password = null;
    }

    setId(id) {
        this.id = id;
    }

    getId() {
        return this.id;
    }

    setEmail(email) {
        this.email = email;
    }

    getEmail() {
        return this.email;
    }

    setPassword(password) {
        this.password = password;
    }

    getPassword() {
        return this.password;
    }

    isSamePassword(pwd) {
        return pwd === this.password;
    }

    find(email){
        return email === this.#email
    }

    enviarMensaje(mensaje) {
        let menciones = extraerMenciones(mensaje);
        let mensajeConMenciones = {
            user_id: this.getId(),
            message: mensaje,
            mentions: menciones.map(mention => `@${mention}`)
        };

        console.log(mensajeConMenciones);
    }
}

module.exports = User;
