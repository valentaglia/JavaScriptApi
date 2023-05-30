class Notification {

    #key
    #text
    #sendDate
    #readDate // = null ???

    static send(notification) {
        // Aquí puedes realizar las acciones necesarias para almacenar la notificación,
        // como guardarla en una base de datos o enviarla a través de una API.
    
        // Por ejemplo, para mostrarla por consola:
        console.log(notification);
    }

    setKey(key) {
        this.#key = key
    }

    setText(text) {
        this.#text = text
    }

    setSendDate(sendDate) {
        this.#sendDate = sendDate
    }

    setReadDate(readDate) {
        this.#readDate = readDate
    }

}

module.exports = Notification