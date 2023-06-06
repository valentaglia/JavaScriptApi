class Notification {

    #id
    #key
    #text
    #sendDate
    #readDate = null

    getId() {
        return this.#id
    }

    setId(id) {
        this.#id = id
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