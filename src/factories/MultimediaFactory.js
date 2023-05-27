const Image = require('../models/Image.js');

class MultimediaFactory {
    static make(obj){
        var img = new Image;
        img.setWidth(obj.width);
        img.setHeight(obj.height);
        img.setPath(obj.path);
        img.setFilename(obj.filename);
        img.setExt(obj.ext);
        img.setBuffer(obj.buffer);
        return img;
    }
}

module.exports = MultimediaFactory