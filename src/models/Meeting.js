class Meeting{
    id
    startTime
    duration
    endTime
    guests = []
        
    constructor(id, startTime, endTime, duration) {
          this.id = id;
          this.startTime = startTime;
          this.endTime = endTime;
          this.duration = duration;
          this.guests = [];
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
        
      
}
module.exports = Meeting
