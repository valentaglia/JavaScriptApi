const MeetingFactory = require('./factories/MeetingFactory')
const MeetingRepository = require('./repositories/MeetingRepository')

class Application2 {
    constructor() {
        this.name = 'Zoom'
        this.version = '1.0.0'
        this.user = null
    }

    crearMeeting(start_time, duration, end_time) {
        // construyo el objeto user = Factory
        const meeting = MeetingFactory.make({
            start_time, 
            duration,
            end_time
        })
        
        // guardarlo en la base de datos = Repository
        const repo = new MeetingRepository
        repo.create(meeting)

        // devolver la instancia del usuario guardado
        return meeting
    }

    
}

module.exports = Application2