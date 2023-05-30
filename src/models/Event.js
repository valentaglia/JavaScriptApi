class Event {
    #dateEvent
    #startEvent
    #endEvent
    

   
    
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
    
    
}

module.exports = Event
