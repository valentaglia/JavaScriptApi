const UserRepository = require('../repositories/UserRepository');

class Message {
    #id
    #contenido
    #listaLikes = [{}]
    #listaDislike = [{}]

    constructor(content) {
        this.content = String(content);
    }

    setId(id) {
        this.#id = id
    }

    getId() {
        return this.#id
    }

    setContenido(contenido) {
        this.contenido = contenido;
    }

    getContenido() {
        return this.#contenido;
    }

    getLikes() {
        return this.#listaLikes;
    }

    getDislikes() {
        return this.#listaDislike;
    }

    like() {
        const reaccionEncontrada = this.#listaLikes.find((reaccion) => reaccion.idUsuario === 1);

        if (reaccionEncontrada) {
            if (reaccionEncontrada.like === 1) {
                reaccionEncontrada.like = 0;
            } else {
                reaccionEncontrada.like = 1;
            }
        } else {
            const nuevaReaccion = {idUsuario: 1, like: 1};
            this.#listaLikes.push(nuevaReaccion);
        }
    }

    dislike() {
        const reaccionEncontrada = this.#listaDislike.find((reaccion) => reaccion.idUsuario === 1);

        if (reaccionEncontrada) {
            if (reaccionEncontrada.dislike === 1) {
                reaccionEncontrada.dislike = 0;
            } else {
                reaccionEncontrada.dislike = 1;
            }
        } else {
            const nuevaReaccion = {idUsuario: 1, dislike: 1};
            this.#listaDislike.push(nuevaReaccion);
        }
    }

    find(id) {
        const userRepository = new UserRepository();
        const mensajeEncontrado = userRepository.findMessage(id);
        return mensajeEncontrado;
    }

    getStats() {
        const stats = {
            views: 46,
            likes: 10,
            dislikes: 2,
            word_count: this.content.split(' ').length,
            char_count: this.content.length
        };

        return stats;
    }
}

module.exports = Message
