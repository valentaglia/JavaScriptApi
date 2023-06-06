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

    byEmail(user){
        if(user.email == null){
            throw new Error('Se esperaba un email')
        }

        let email = this.findByEmail(user.email)
        if(email == undefined){
            throw new Error('El usuario con ese mail no se encontro')

        }

        return Factory.add(user)
    }

    
    
}

module.exports = MeetingRepository