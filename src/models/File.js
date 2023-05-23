class File {

    #filename
    #buffer
    #path
    #ext

    setFilename(filename){
        this.#filename = filename;
    }

    getFilename(){
        return this.#filename;
    }

    setPath(path){
        this.#path = path;
    }

    getPath(){
        return this.#path;
    }

    setExt(ext){
        this.#ext = ext;
    }

    getExt(){
        return this.#ext;
    }

    getBuffer(){
        return this.#buffer;
    }
    setBuffer(b){
        this.#buffer = b;
    }

}

module.exports = File