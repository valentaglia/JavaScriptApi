const CalendarRepository = require('../repositories/EventRepository')

class CalendarController {
    constructor() {
        this.repo = new CalendarRepository
    }

    index = (req, res) => {
        let events = this.repo.getAllEvents()
    
        res.json(events)
    }

    
    show = (req, res) => {
        let event = this.repo.byId(req.params.id)
        if(event !== null && event !== undefined){
            res.status(200).json(event)
        }
        else{
            res.status(404).end("Evento no encontrado")
        }
    }
    
    
    
}

module.exports = CalendarController
