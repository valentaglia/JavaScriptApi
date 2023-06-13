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

    getKey() {
        return this.#key
    }

    setKey(key) {
        this.#key = key
    }

    getText() {
        return this.#text
    }

    setText(text) {
        this.#text = text
    }

    getSendDate() {
        return this.#sendDate
    }

    setSendDate(sendDate) {
        this.#sendDate = sendDate
    }

    getReadDate() {
        return this.#readDate
    }

    setReadDate(readDate) {
        this.#readDate = readDate
    }

}

module.exports = Notification