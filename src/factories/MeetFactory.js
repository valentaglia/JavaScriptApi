const Meet = require('../models/Meet')

class MeetFactory {
    static make(obj) {
        let meet = new Meet
        
        meet.setDate(obj.date)
        meet.setTime(obj.time)
        meet.setDuration(obj.duration)

        return meet
    }
}

module.exports = MeetFactory