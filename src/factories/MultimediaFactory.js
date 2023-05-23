const Image = require('../models/Image.js')
const MultimediaRepository = require('../repositories/MultimediaRepository.js');

class MultimediaFactory {

    static MSG_ERROR_OBJ_IMAGEN_INVALIDO = 'Objeto imagen es invalido';
    
    static make(obj){
        var img = new Image;
        img.setWidth(obj.width);
        img.setHeight(obj.height);
        img.setPath(obj.path);
        img.setExt(obj.ext);
        return img;
    }

    static async getImage(path) {

        var rep = new MultimediaRepository();
        var data = await rep.getImage(path);
        var img  = new Image();
        img.setBuffer(data.buffer);
        img.setPath(path);
        img.setFilename(data.filename);
        img.setExt(data.ext);

        return img;
    }

    static async getResizedImage(image, width, height) {

        if(!image instanceof Image){
            throw (MultimediaFactory.MSG_ERROR_OBJ_IMAGEN_INVALIDO);
        }

        var rep = new MultimediaRepository();
        var img = new Image();
        
        var data = await rep.resizeImage(
            image, 
            width, 
            height
        );

        img.setPath(image.getPath());
        img.setFilename(image.getFilename());
        img.setExt(image.getExt());
        
        //resize data
        img.setBuffer(data.buffer);
        img.setWidth(data.width);
        img.setHeight(data.height);

        return img;
    }
}

module.exports = MultimediaFactory