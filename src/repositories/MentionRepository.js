class MentionRepository {
    constructor() {
        // Array para mantener un registro de las menciones
        this.mentions = [];
    }

    // Obtener todas las menciones
    all() {
        return this.mentions;
    }

    // Guardar una nueva mención
    save(mention) {
        this.mentions.push(mention);
    }

    // Buscar una mención por su ID
    findById(id) {
        const mention = this.mentions.find((mention) => mention.id === id);
        if (!mention) {
            throw new Error('Mention not found');
        }
        return mention;
    }

    // Eliminar una mención por su ID
    deleteById(id) {
        const index = this.mentions.findIndex((mention) => mention.id === id);
        if (index === -1) {
            throw new Error('Mention not found');
        }
        this.mentions.splice(index, 1);
    }
}

module.exports = MentionRepository;
