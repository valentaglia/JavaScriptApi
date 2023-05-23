const { error } = require('console');
const fs = require('fs')
const sharp = require('sharp')

class Repository {
    file;

    read() {
        let content = fs.readFileSync(this.file)
        return JSON.parse(content)
    }

    findById(id) {
        let content = this.read()
        return content.find((obj) => obj.id == id)
    }

    save(data) {
        let content = this.read()

        data.id = Date.now()

        content.push(data)

        content = JSON.stringify(content)

        fs.writeFileSync(this.file, content)

        return true;
    }

    //CONVERTIR IMG A JPG

    convertirImgAjpg(archivo){
        const rutaImgPNG = './image.png' // en clase hija especificar la ruta y dejar la variable sin especificar aca
        const rutaImgJpg = './image.jpg' // lo mismo q arriba
        
        try {
            // Accedo a la imagen que voy a convertir
            const image = fs.readFileSync(rutaImgPNG)            
        
            sharp(image).toJpeg().toFile(rutaImgJpg, (error, info) => {
                if (error) {
                    console.log('Error al convertir la imagen', error)
                    return
                }
                console.log('Resultado exitoso', info)    
            })            
        } catch (error) {
            console.log('Error al leer la imagen', error)
        }

       /*  // Este método copia la imagen con el mismo nombre y misma carpeta a .jpeg
        const copy = image.toJpeg() */
    }    

}

module.exports = Repository