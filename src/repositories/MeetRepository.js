const Meet = require('../models/Meet')
const Factory = require('../factories/MeetFactory')
const Repository = require('./Repository')

class MeetRepository extends Repository {
    file = './meets.json'

    byId(id) {
        if (isNaN(id)) {
            throw new Error('Se esperaba id numerico')
        }

        let meet = this.findById(id)

        if (meet === undefined) {
            throw new Error('El Meet no se encontro')
        }

        return Factory.make(meet)
    }

    create(meet) {
        if (meet instanceof Meet) {
            this.save({
                date: meet.getDate(),
                time: meet.getTime(),
                duration: meet.getDuration(),
            })

            return;
        }

        throw new Error('Se requiere una instancia de Meet')
    }
}

module.exports = MeetRepository