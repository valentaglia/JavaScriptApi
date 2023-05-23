const Repository = require('./Repository')

class ConversorRepository extends Repository{
    archivo = './img/perro.png'

    convertir(archivo){
        if (archivo == null) {
            throw new Error('No se encontro archivo')
        }

        this.convertirImgAjpg(archivo)
        
    }
}

module.exports = ConversorRepository