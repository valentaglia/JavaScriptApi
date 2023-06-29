const url = require("url");
const Factory = require('../factories/MeetingFactory')

class Meeting{
    id
    startTime
    duration
    endTime
    guests = []
        
    constructor(startTime, endTime, duration) {
          this.startTime = startTime;
          this.endTime = endTime;
          this.duration = duration;
          this.guests = [];
          this.generateLink();
          this.generateId();
        }
      
        getId() {
          return this.id;
        }

        getGuests() {
          return this.guests;
        }
      
        addGuest(guest) {
            this.guests.push(guest);
        }

        removeGuest(guest) {
          this.guests = this.guests.filter((item) => item !== guest);
        }
        
        getLink() {
          return this.link;
      }

      generateLink(){
        const meetingId = this.getId();
        const path = this.path;
        this.link = new URL(`https://localhost:8080${path}/${meetingId}`);
        return this.link
    }

    save(){
        const newMeeting = {
            "guests": this.guest,
            "link": this.link,
            "startTime": this.startTime,
            "endTime": this.endTime,
            "duration": this.duration,
        };
        Factory.create(newMeeting)
    }
      
}
module.exports = Meeting
