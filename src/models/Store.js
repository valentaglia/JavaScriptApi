class Store{
    #id
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
    setId(id){
        this.#id
    }
    getId(){
        return this.#id
    }
}
module.exports = Store