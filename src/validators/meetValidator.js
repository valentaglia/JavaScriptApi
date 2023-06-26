const dayjs = require('dayjs')

module.exports = {

    dateNotEmpty(data){
        if (data.date.length === 0){
            throw new Error ('DATE_IS_EMPTY')
        }
    },

    timeNotEmpty(data){
        if (data.time.length === 0){
            throw new Error ('TIME_IS_EMPTY')
        }
    },

    durationNotEmpty(data){
        if (data.duration == 0){
            throw new Error ('DURATION_IS_EMPTY')
        }
    },

    durationOutOfRange(data){
        if (data.duration >= 60 || data.duration < 0){
            throw new Error ('DURATION_OUT_OF_RANGE')
        }
    },

    dateValidator(data){
        let fechaActual =  new Date().toLocaleDateString()
        
        let fechaIngresada = dayjs(data.date).format('DD/MM/YYYY')      
        
        if(dayjs().isAfter(dayjs(data.date))){
        
        throw new Error(`La fecha ${fechaIngresada} debe ser mayor a ${fechaActual}`)
    }

    }


}