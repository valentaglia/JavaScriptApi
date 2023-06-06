const MetadataFactory = require('./factories/MetadataFactory')
const MetadataRepository = require('./repositories/MetadataRepository')


class MetadataApp {
    constructor() {

        this.metadata = null
    }

    saveMetadata(type, mime,width,height) {
                
               
        // construyo el objeto Metadata = Factory
        const metadata = MetadataFactory.make({
            type, 
            mime,
            width, 
            height,
        })
        
        // guardarlo en la base de datos = Repository
        const repo = new MetadataRepository
        repo.create(metadata)

        // devolver la instancia Metadata guardada
        return metadata
    }

}

module.exports = MetadataApp