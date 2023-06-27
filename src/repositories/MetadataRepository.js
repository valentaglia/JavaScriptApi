const Metadata = require('../models/Metadata')
const Factory = require('../factories/MetadataFactory')
const Repository = require('./Repository')

class MetadataRepository extends Repository {
    file = './examples/Metadatas.json'

    all(){
        let metadatasList = "Lista todos los Metadatos del JSON"
        //console.log(metadatasList)
        return metadatasList
    }

    byId(id) {
        if (isNaN(id)) {
            throw new Error('Se esperaba id numerico')
        }

        let metadata = this.findById(id)

        if (metadata === undefined) {
            throw new Error('La metadata no se encontro')
        }

        return Factory.make(metadata)
    }

    create(metadata) {
        if (metadata instanceof Metadata) {
            this.save({
                type : metadata.gettype(),
                mime : metadata.getmime(),
                width : metadata.getwidth(),
                height : metadata.getheight(),
            })

            return;
        }

        throw new Error('Se requiere una instancia de Metadata')
    }
}

module.exports = MetadataRepository