const Metadata = require('../models/Metadata')

class MetadataFactory {
    static make(obj) {
        let metadata = new Metadata
        
        metadata.setId(obj.id)
        metadata.settype(obj.type)
        metadata.setmime(obj.mime)
        metadata.setwidth(obj.width)
        metadata.setheight(obj.height)

        return metadata
    }
}

module.exports = MetadataFactory

