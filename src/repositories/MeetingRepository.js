const Meeting = require('../models/Meeting')
const Factory = require('../factories/MeetingFactory')
const Repository = require('./Repository')

class MeetingRepository extends Repository {
    file = './meeting.json'

    byId(id) {
        if (isNaN(id)) {
            throw new Error('Se esperaba id numerico')
        }

        let meeting = this.findById(id)

        if (meeting === undefined) {
            throw new Error('El usuario no se encontro')
        }

        return Factory.make(meeting)
    }

    create(meeting) {
        if (meeting instanceof Meeting) {
            this.save({
                date: meeting.getDate(),
                time: meeting.getTime(),
                duration: meeting.getDuration(),
            })

            return;
        }

        throw new Error('Se requiere una instancia de Meet')
    }

    addGuest(meetId, guest) {
        if (isNaN(meetId)) {
            throw new Error('Se esperaba un ID numérico');
        }

        let meet = this.byId(meetId);


        if (meet == null) {
            throw new Error('No se encontró la reunión');
        }

        meet.addGuest(guest);

        this.save(meet);

        return meet;
    }

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
}

module.exports = MeetingRepository