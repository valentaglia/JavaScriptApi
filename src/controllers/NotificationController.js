const NotificationRepository = require('../repositories/NotificationRepository')

class NotificationController {
    constructor() {
        this.repo = new NotificationRepository
    }

    index = (req, res) => {
        let notifications = this.repo.index()
    
        res.json(notifications)
    }

    show = (req, res) => {
        try {
            let notif = this.repo.byId(req.params.id)
            res.json(notif)
        } catch (e) {
            res.json({error: e.message})
        }
    }

    create = (req, res) => {
        // valido
        if (req.body.text.length === 0) {
            return res.status(422).end('TEXT_IS_EMPTY')
        }

        if (req.body.text.length > 144) {
            return res.status(422).end('TEXT_TOO_LONG')
        }

        // guardo
        this.repo.create({
            text : req.body.text
        })

        // respondo
        res.status(201).json({})
    }
    
    update = (req, res) => {}
    
    delete = (req, res) => {}
}

module.exports = NotificationController
