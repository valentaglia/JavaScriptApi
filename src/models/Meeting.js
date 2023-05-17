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
            const index = this.guests.indexOf(guest);
            if (index !== -1) {
              this.guests.splice(index, 1);
            }
          }
      
}
module.exports = Meeting
