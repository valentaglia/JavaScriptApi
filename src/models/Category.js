class Category {
    #name


    setName(name) {
        this.#name = name
    }

    getName() {
        return this.#name
    }
}

module.exports = Category

