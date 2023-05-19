class Cart {
    #user_id
    #items
    #subtotal
    setUserId(id) {
        this.#user_id = id
    } 
    getUserId() {
        return this.#user_id
    }
    setItems(items) {
        this.#items = items
        this.calcularSubtotal()
    }
    addItem(item){
        this.#items.push(item)
        this.calcularSubtotal()
    }
    getItems(items) {
        return this.#items.map((x) => x)
    }
    calcularSubtotal() {
        this.#subtotal = this.#items.reduce((accum, item) => accum + item.price, 0)
    }
    getSubtotal() {
        return this.#subtotal
    }
}
module.exports = Cart