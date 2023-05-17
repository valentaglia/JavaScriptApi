class Store{
    #name
    #website
    setName(name) {
        this.#name = name
    }
    setWebsite(url) {
        this.#website = url
    }
    getName(){

        return this.#name
    }
    getWebsite(){
        return this.#website
    }
}
module.exports = Store