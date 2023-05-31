const NotificationRepository = require('../repositories/NotificationRepository')

class Notification {

    #key
    #text
    #sendDate
    #readDate // = null ???

    static send(notification) {
        NotificationRepository.save(notification);
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