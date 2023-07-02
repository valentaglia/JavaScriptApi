
//const {dateValidator} = require('./validators/meetValidator')
const MeetingFactory = require('./factories/MeetFactory')
const MeetingRepository = require('./repositories/MeetRepository')

module.exports = {
    crearMeeting: function (date, time, duration) {
        //dateValidator(date)
        const meeting = MeetingFactory.make({
            date, 
            time,
            duration
        })
        const repo = new MeetingRepository
        repo.create(meeting)
        return meeting
    }
}