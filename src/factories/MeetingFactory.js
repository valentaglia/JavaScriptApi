const Meeting = require('../models/Meeting')

class MeetingFactory {
    static make(obj) {
        let meeting = new Meeting
        
        meeting.setStart_time(obj.start_time)
        meeting.setDuration(obj.duration)
        meeting.setEnd_time(obj.end_time)

        return meeting
    }

}

module.exports = MeetingFactory