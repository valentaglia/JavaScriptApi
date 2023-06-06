const Event = require('../models/Event')
class EventFactory {
    static make(obj) {
        let event = new Event
        
        event.setDateEvent(obj.dateEvent)
        event.setStartEvent(obj.startEvent)
        event.setEndEvent(obj.endEvent)

        return event
    }
}

module.exports = EventFactory