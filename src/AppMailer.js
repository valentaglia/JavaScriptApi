const _ = require('lodash')
const fs = require('fs')

class AppMailer {

    template(file,ObjetoMensaje) {
        const archivo = fs.readFileSync(file)
        const estructura = _.template(archivo)
        return estructura(ObjetoMensaje)
    }

}

module.exports = AppMailer