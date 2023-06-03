const Metadata = require('../models/Metadata')
const Factory = require('../factories/MetadataFactory')
const Repository = require('./Repository')

class MetadataRepository extends Repository {
    file = './Metadatas.json'

    byId(id) {
        if (isNaN(id)) {
            throw new Error('Se esperaba id numerico')
        }

        let Metadata = this.findById(id)

        if (Metadata === undefined) {
            throw new Error('La metadata no se encontro')
        }

        return Factory.make(Metadata)
    }

    create(Metadata) {
        if (Metadata instanceof Metadata) {
            this.save({
                type : Metadata.gettype(),
                mime : Metadata.getmime(),
                width : Metadata.getwidth(),
                height : Metadata.getheight(),
            })

            return;
        }

        throw new Error('Se requiere una instancia de Metadata')
    }
}

module.exports = MetadataRepository