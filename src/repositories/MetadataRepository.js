const Metadata = require('../models/Metadata')
const Factory = require('../factories/MetadataFactory')
const Repository = require('./Repository')

class MetadataRepository extends Repository {
    file = './examples/Metadatas.json'

    all(){
        let metadatasList = this.read()
        return metadatasList
    }

    byId(id) {
        if (isNaN(id)) {
            throw new Error('Se esperaba id numerico')
        }

        let metadata = this.findById(id)

        if (metadata === undefined) {
            throw new Error('La metadata no se encontro')
        }

        return Factory.make(metadata)
    }

    create(metadata) {
        this.save(metadata)

            return
    }


    update(data) {
        // Metodo para actualizar Metadatas.json
        const metadataList = this.read()
        const indice = metadataList.findIndex((objeto) => objeto.id == data.id) //Magia, comparando el atributo me devuelve el indice en el array
        console.log(indice)

        if (indice !== -1) {
          metadataList[indice].type = (data.type != null) ? data.type : metadataList[indice].type //Posicionandome con el indice obtenido modifico los datos en el Array
          metadataList[indice].mime = (data.mime != null) ? data.mime : metadataList[indice].mime
          metadataList[indice].width = (data.width != null) ? data.width : metadataList[indice].width
          metadataList[indice].height = (data.height != null) ? data.height : metadataList[indice].height
          
        const updateMetadataList = JSON.stringify(metadataList)
        console.log(updateMetadataList)

          fs.writeFileSync(this.file, updateMetadataList) //ACA tengo el problema!!!! no lo puedo hacer grabar
          return true
        }
        else {
          console.log("No hay metadata para modificar")
          return false
        }
      }



      deleteById(id) {
        const metadataList = this.read()
        const indice = metadataList.findIndex((objeto) => objeto.id == id) //Magia, comparando el atributo me devuelve el indice en el array
        console.log(indice)
        if (indice !== -1) {
            metadataList.splice(indice, 1) // Magia, Elimina el elemento que coincide con el ID buscado
            const updateMetadataList = JSON.stringify(metadataList)
            console.log(updateMetadataList)
            fs.writeFileSync(this.file, updateMetadataList) //ACA tengo el problema!!!! no lo puedo hacer grabar
            return true
  
        } else {
          console.log("No hay metadata para eliminar")
          return false
        }
      }
    


}

module.exports = MetadataRepository