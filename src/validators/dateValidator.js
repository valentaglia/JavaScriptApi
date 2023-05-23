module.exports = {
    dateValidator: function(date){
        let fechaActual =  new Date().toLocaleDateString

    if(date <= fechaActual){
        throw new Error(`La fecha ${date} debe ser mayor a la actual`)
    }

    }


}