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
            return res.status(422).end('TYPE_IS_EMPTY')
        }

        if (req.body.type.length > 10) {
            return res.status(422).end('TYPE_TOO_LONG')
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
    
    update = (req, res) => {
        const url = req.originalUrl // Magia para traer la URL completa desde "req"
        const arrayStrings = url.split('/') // Magia que arma un array de todos los valores que estan entre "/"
        const idAModificar = arrayStrings.pop()// Magia para sacar el ultimo elemento del array

        const respuesta = this.repo.update({
            id : idAModificar,
            type : req.body.type,
            mime : req.body.mime,
            width : req.body.width,
            height : req.body.height
        })

            //console.log(respuesta)
            if (respuesta){
                res.status(201).json({Message : "Metadata Eliminada"})
            }
            else {
                res.status(404).json({Message : "Metadata no encontrada"})
            }

    }
    
    delete = (req, res) => {
        const url = req.originalUrl // Magia para traer la URL completa desde "req"
        const arrayStrings = url.split('/') // Magia que arma un array de todos los valores que estan entre "/"
        const idAModificar = arrayStrings.pop() // Magia para sacar el ultimo elemento del array
        console.log(idAModificar)
        const respuesta = this.repo.deleteById(idAModificar)

        //console.log(respuesta)
        if (respuesta){
            res.status(201).json({Message : "Metadata Eliminada"})
        }
        else {
            res.status(404).json({Message : "Metadata no encontrada"})
        }
    }
}

module.exports = MetadataController
