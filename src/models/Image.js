const MultimediaFactory = require('../factories/MultimediaFactory');
const MultimediaRepository = require('../repositories/MultimediaRepository');
const File = require('../models/File');

class Image extends File {

    #width
    #height

    /* async resize(width, height) {
        
        var rep =  new MultimediaRepository();

        var buffer = await rep.resizeImage(
            this.getPath(), 
            width, 
            height
        );

        this.setBuffer(buffer);
    } */

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