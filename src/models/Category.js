class Category {
    #name
    #id


    setName(name) {
        this.#name = name
    }

    getName() {
        return this.#name
    }

    setId(id){
        this.#id = id
    }

    getId(){
        return this.#id
    }
}

module.exports = Category

