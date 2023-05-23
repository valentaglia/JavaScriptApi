class Event {
    #id
    #schedule
    #dateEvent
    #startEvent
    #endEvent
    #guests
    

    setId(id) {
        this.#id = id
    }

    getId() {
        return this.#id
    }
    getSchedule(){
        return this.#schedule
    }
    setSchedule(schedule){
        this.#schedule = schedule
    }
    setDateEvent(date){
        this.#dateEvent = date
    }
    getDateEvent(){
        return this.#dateEvent
    }
    getStartEvent(){
        return this.#startEvent
    }
    setStartEvent(date){
        this.#startEvent = date
    }
    getEndEvent(){
        return this.#endEvent
    }
    setEndEvent(date){
        this.#endEvent = date
    }
    getGuest(){
        return this.#guests
    }
    setGuest(guest){
        this.#guests = guest
    }
    
}

module.exports = Event
