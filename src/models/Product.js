class Product{
    #name
    #price
    #currency
    #stock

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