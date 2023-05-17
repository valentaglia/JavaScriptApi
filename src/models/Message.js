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

    getContenido() {
        return this.#contenido;
    }

    Like() {
        this.#likes = true;
        this.#dislikes = false;
      }
    
      Dislike() {
        if (!this.#dislikes) {
          this.#likes = false;
          this.#dislikes = true;
        } else {
          this.#dislikes = false;
        }
      }

    find(id) {
        const message = new Message();
        message.#id = 1;
        message.#contenido = "Hola"
        
        if (message.getId() === id) {
            return message;
        }
        return null;
    }
}

module.exports = Message;