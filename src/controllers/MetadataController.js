const MetadataRepository = require('../repositories/MetadataRepository')

class MetadataController {
    constructor() {
        this.repo = new MetadataRepository
    }

    index = (req, res) => {
        let metadatas = this.repo.all()
    
        res.json(metadatas)
    }

    show = (req, res) => {
        try {
            let metadata = this.repo.byId(req.params.id)
            res.json(metadata)
        } catch (e) {
            res.json({error: e.message})
        }
    }

    create = (req, res) => {
        // valido
        if (req.body.type.length === 0) {
            return res.status(422).end('NAME_IS_EMPTY')
        }

        if (req.body.type.length > 10) {
            return res.status(422).end('NAME_TOO_LONG')
        }

        // guardo
        this.repo.create({
            type : req.body.type,
            mime : req.body.mime,
            width : req.body.width,
            height : req.body.height
        })

        // respondo
        res.status(201).json({})
    }
    
    update = (req, res) => {}
    
    delete = (req, res) => {}
}

module.exports = RolesController
