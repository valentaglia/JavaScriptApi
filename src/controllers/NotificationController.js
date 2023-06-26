const NotificationRepository = require('../repositories/NotificationRepository')

class NotificationController {
    constructor() {
        this.repo = new NotificationRepository()
    }

    index = (req, res) => {
        let notifications = this.repo.getNotifications();
    
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

        this.repo.save({
            id : "",
            key : req.body.key,
            text : req.body.text,
            sendDate : req.body.sendDate,
            readDate : req.body.readDate
        })

        // respondo
        res.status(201).json({Message : "Se creó la notificación"});
    }
    
    update = (req, res) => {
        const url = req.originalUrl;
        const parts = url.split('/'); // Divide la URL en partes usando "/" como separador
        const idRoute = parts.pop(); // Elimina el último elemento del array y lo asigna a la variable 'id'

        this.repo.update({
            id : idRoute,
            key : req.body.key,
            text : req.body.text,
            sendDate : req.body.sendDate,
            readDate : req.body.readDate
        })

        res.status(201).json({Message : "Se modificó la notificación"});
    }

    read = (req, res) => {
        const url = req.originalUrl;
        const parts = url.split('/'); // Divide la URL en partes usando "/" como separador
        const idRoute = parts.pop(); // Elimina el último elemento del array y lo asigna a la variable 'id'
        const today = new Date();
        const result = this.repo.update({
            id : idRoute,
            readDate : today.toISOString()
        })

        if (result){
            res.status(201).json({Message : "Se leyó la notificación"});
        }
        else {
            res.status(404).json({Message : "No se leyó la notificación"});
        }


        /*
            MIDDLEWARE
            se va a encargar de validar 
            qué pasa si el objeto contiene datos "" o null o undefined etc
        */
    }
    
    delete = (req, res) => {
        const url = req.originalUrl;
        const parts = url.split('/'); // Divide la URL en partes usando "/" como separador
        const idRoute = parts.pop(); // Elimina el último elemento del array y lo asigna a la variable 'id'

        const result = this.repo.deleteById(idRoute);

        if (result){
            res.status(201).json({Message : "Se eliminó la notificación"});
        }
        else {
            res.status(404).json({Message : "No se encontró la notificación a eliminar"});
        }
    }

    deleteAll = (req, res) => {
        this.repo.deleteAll();
        res.status(201).json({Message : "Se eliminaron todas las notificaciones"});
    }
}

module.exports = NotificationController
