const Event = require('../models/Event')
const Repository = require('./Repository')
const Factory = require('../factories/EventFactory')

class EventsRepository extends Repository {
    file = './events.json'

    byId(id) {
        if (isNaN(id)) {
            throw new Error('Se esperaba id numerico')
        }

        let event = this.findById(id)

        if (event === undefined) {
            throw new Error('El evento no se encontro')
        }

        return Factory.make(event)
    }

    getAllEvents(){
        let events = 

        return events
    }

    create(event) {
        if (event instanceof Event) {
            this.save({
                dateEvent: event.getDateEvent(),
                startEvent: event.getStartEvent(),
                endEvent: event.getEndEvent()

            })

            return event;
        }

        throw new Error('Se requiere una instancia de evento')
    }
}

module.exports = EventsRepository