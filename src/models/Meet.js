class Meet{
    #date
    #time
    #duration
    guests = []
    
    setDate(date){
        this.#date = date
    }
    getDate(){
        return this.#date
    }

    setTime(time){
        this.#time = time
    }

    getTime(){
        return this.#time
    }

    setDuration (duration){
        const DURACION_MIN =  15
        if (duration < DURACION_MIN) {
            duration = DURACION_MIN
        }  
        this.#duration = duration
    }
    getDuration(){
        return this.#duration
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

module.exports = Meet