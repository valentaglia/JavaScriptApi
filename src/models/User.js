const ContactRepository = require("../repositories/ContactsRepository");

class User {
    #id
    #email
    #password
    //Se agrego un nuevo atributo a la clase User llamado contacts
    //el cual es un JSON que contiene todos los contactos del usuario
    #contacts = new ContactRepository

    setId(id) {
        this.#id = id
    }

    getId() {
        return this.#id
    }

    setEmail(email) {
        this.#email = email
    }

    getEmail() {
        return this.#email
    }

    setPassword(password) {
        this.#password = password
    }

    getPassword() {
        return this.#password
    }

    isSamePassword(pwd) {
        return pwd === this.#password
    }
    //Seteo el url de donde se encuentran los contactos del usuario
    //para luego poder ir a buscarlos
    setContacts(){
        this.#contacts = new ContactRepository
    }
    //Busco en mi json de contactos al usuario con el email identico al parametro
    findContact(email){
        let  user = this.#contacts.findByEmail(email);
        return user;
    }

}

module.exports = User
