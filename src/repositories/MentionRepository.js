// Archivo: MentionRepository.js

class MentionRepository {
    constructor() {
        this.mentions = [];
    }

    all() {
        return this.mentions;
    }

    save(mention) {
        this.mentions.push(mention);
        return mention;
    }

    findById(id) {
        const mention = this.mentions.find((mention) => mention.id === id);
        if (!mention) {
            throw new Error('Mention not found');
        }
        return mention;
    }

    deleteById(id) {
        const index = this.mentions.findIndex((mention) => mention.id === id);
        if (index === -1) {
            throw new Error('Mention not found');
        }
        this.mentions.splice(index, 1);
    }
}

module.exports = MentionRepository;
