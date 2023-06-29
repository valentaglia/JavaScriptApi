const { ShortUniqueId } = require('short-unique-id');
const Meeting = require('../models/Meeting');

class MeetingFactory {
    
    static make(obj) {
        if (!(obj instanceof Meeting)) {
            throw new Error('Se espera una instancia de Meeting.');
        }

        const meeting = new Meeting(obj.getStartTime(), obj.getDuration());
        meeting.setEndTime(obj.getEndTime());
        meeting.setLink(obj.getLink());
        const guests = obj.getGuests();
        meeting.setGuests([...guests]);
        return meeting;
    }

    static generateMeetingId() {
        const uid = new ShortUniqueId();
        return uid.randomUUID(10);
    }
}

module.exports = MeetingFactory;