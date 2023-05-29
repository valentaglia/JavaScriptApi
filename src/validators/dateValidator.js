const dayjs = require('dayjs')

module.exports = {
    dateValidator: function(date){
        let fechaActual =  new Date().toLocaleDateString()

        let fechaIngresada = dayjs(date).format('DD/MM/YYYY')

    if(fechaIngresada >= fechaActual){
        throw new Error(`La fecha ${fechaIngresada} debe ser mayor a la actual`)
    }

    }


}