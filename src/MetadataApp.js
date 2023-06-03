const MetadataFactory = require('./factories/MetadataFactory')
const MetadataRepository = require('./repositories/MetadataRepository')


class MetadataApp {
    constructor() {

        this.Metadata = null
    }

    saveMetadata(type, mime,width,height) {
                
               
        // construyo el objeto Metadata = Factory
        const Metadata = MetadataFactory.make({
            type, 
            mime,
            width, 
            height,
        })
        
        // guardarlo en la base de datos = Repository
        const repo = new MetadataRepository
        repo.create(Metadata)

        // devolver la instancia del usuario guardado
        return Metadata
    }

}

module.exports = MetadataApp