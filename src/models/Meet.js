class Meet{
    #date
    #time
    #duration
    
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

}

module.exports = Meet