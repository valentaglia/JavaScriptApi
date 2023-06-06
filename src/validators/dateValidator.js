const dayjs = require('dayjs')

module.exports = {
    dateValidator: function(data){
        let fechaActual =  new Date().toLocaleDateString()
        

        let fechaIngresada = dayjs(data).format('DD/MM/YYYY')
       

    if(dayjs(fechaIngresada).isBefore(fechaActual)){
        throw new Error(`La fecha ${fechaIngresada} debe ser mayor a la actual`)
    }

    }


}