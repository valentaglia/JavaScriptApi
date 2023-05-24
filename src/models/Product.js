class Product{
    #id
    #name
    #price
    #currency
    #stock

    setId(id) {
        this.#id = id
    }

    setName(name){
        this.#name = name;
    }

    setPrice(price){
        this.#price = price;
    }

    setCurrency(currency){
        this.#currency = currency;
    }

    setStock(stock){
        this.#stock = stock;
    }

    getId() {
        return this.#id
    }

    getName(){
        return this.#name;
    }

    getPrice(){
        return this.#price;
    }

    getCurrency(){
        return this.#currency;
    }

    getStock(){
        return this.#stock;
    }



}

module.exports = Product