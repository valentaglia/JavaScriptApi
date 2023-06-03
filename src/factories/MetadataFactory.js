const Metadata = require('../models/Metadata')

class MetadataFactory {
    static make(obj) {
        let Metadata = new Metadata
        
        Metadata.setId(obj.id)
        Metadata.settype(obj.type)
        Metadata.setmime(obj.mime)
        Metadata.setwidth(obj.width)
        Metadata.setheight(obj.height)

        return Metadata
    }
}

module.exports = MetadataFactory

