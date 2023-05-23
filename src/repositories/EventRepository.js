const Event = require('../models/Event')
const Factory = require('../factories/UserFactory')
const Repository = require('./Repository')
const EventFactory = require('../factories/UserFactory')

class EventsRepository extends Repository {
    file = './events.json'

    byId(id) {
        if (isNaN(id)) {
            throw new Error('Se esperaba id numerico')
        }

        let user = this.findById(id)

        if (user === undefined) {
            throw new Error('El usuario no se encontro')
        }

        return Factory.make(user)
    }

    getAllEvents(){
        let events = this.read()

        return events
    }

    create(event) {
        if (event instanceof Event) {
            this.save({
                schedule : event.getSchedule()
            })

            return event;
        }

        throw new Error('Se requiere una instancia de User')
    }
}

module.exports = EventsRepository