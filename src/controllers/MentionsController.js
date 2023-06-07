const RoleRepository = require('../repositories/RolesRepository')

class RolesController {
    constructor() {
        this.repo = new RoleRepository
    }

    index = (req, res) => {
        let roles = this.repo.all()
    
        res.json(roles)
    }

    show = (req, res) => {
        try {
            let role = this.repo.findById(req.params.id)
            res.json(role)
        } catch (e) {
            res.json({error: e.message})
        }
    }

    create = (req, res) => {
        // valido
        if (req.body.name.length === 0) {
            return res.status(422).end('NAME_IS_EMPTY')
        }

        if (req.body.name.length > 10) {
            return res.status(422).end('NAME_TOO_LONG')
        }

        // guardo
        this.repo.save({
            name : req.body.name
        })

        // respondo
        res.status(201).json({})
    }
    
    update = (req, res) => {}
    
    delete = (req, res) => {}
}

module.exports = RolesController
