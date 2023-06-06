const File = require('../models/File');

class Image extends File {

    #width
    #height

    setWidth(w){
        this.#width = w;
    }

    getWidth(){
        return this.#width;
    }

    setHeight(h){
        this.#height = h;
    }

    getHeight(){
        return this.#height;
    }
}

module.exports = Image