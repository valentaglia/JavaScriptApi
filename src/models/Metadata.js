class Metadata {
    #id
    #type
    #mime
    #width
    #height


    setId(id) {
        this.#id = id
    }

    getId() {
        return this.#id
    }

    settype(type) {
        this.#type = type
    }

    gettype() {
        return this.#type
    }

    setmime(mime) {
        this.#mime = mime
    }

    getmime() {
        return this.#mime
    }

    setwidth(width) {
        this.#width = width
    }

    getwidth() {
        return this.#width
    }

    setheight(height) {
        this.#height = height
    }

    getheight() {
        return this.#height
    }
   
}

module.exports = Metadata