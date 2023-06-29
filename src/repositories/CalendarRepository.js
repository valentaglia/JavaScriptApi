const Calendar = require('../models/Calendar')
const Factory = require('../factories/CalendarFactory')
const Repository = require('./Repository')

class CalendarRepository extends Repository {
    file = './calendars.json'

    byId(id) {
        if (isNaN(id)) {
            throw new Error('Se esperaba id numerico')
        }

        let calendar = this.findById(id)

        if (calendar === undefined) {
            throw new Error('No se encontró el calendar')
        }

        return Factory.make(calendar)
    }

    create(calendar) {
        if (calendar instanceof Calendar) {
            this.save({
               //lógica de creado de Calendar
            })

            return;
        }

        throw new Error('Se requiere una instancia de Calendar')
    }
}

module.exports = CalendarRepository