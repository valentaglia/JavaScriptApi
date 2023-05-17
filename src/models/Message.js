class Message {
    #id
    #contenido
    #likes = false;
    #dislikes = false;


    setId(id) {
        this.#id = id
    }

    getId() {
        return this.#id
    }

    getLikes() {
        return this.#likes;
    }

    getDislikes() {
        return this.#dislikes;
    }

    getContenidos() {
        return this.#contenido;
    }

    Like() {
        this.like = true;
        this.dislike = false;
    }

    Dislike() {
        if(!this.dislike){
            this.like = false;
            this.dislike = true;
        }else{
            this.dislike = false;
        }
        
    }

    find(id) {
        if (this.id === id) {
          return this;
        }
        return null;
      }

}
module.exports = Message;