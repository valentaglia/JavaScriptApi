const CalendarRepository = require('../repositories/EventRepository')

class CalendarController {
    constructor() {
        this.repo = new CalendarRepository
    }

    index = (req, res) => {
        let events = this.repo.getAllEvents()
    
        res.json(events)
    }

    

    
    
    
}

module.exports = CalendarController
