const { validateResizeImage } = require('./validators/MultimediaValidator');
const MultimediaFactory = require('./factories/MultimediaFactory');
const MultimediaRepository = require('./repositories/MultimediaRepository');

class Multimedia {
    
    async resizeImage(path, size) {

        const SEP = 'x';

        validateResizeImage(path, size);

        var rep = new MultimediaRepository();
        var img = await MultimediaFactory.getImage(path);
        
        console.log(
            "Imagen", 
            img, 
            img.getPath(), 
            img.getFilename(),
            img.getExt(),
            img.getWidth(), 
            img.getHeight()
        );

        var split = size.split(SEP);
        var w = Number(split[0]);
        var h = Number(split[1]);

        var resizedImg = await MultimediaFactory.getResizedImage(img, w, h);

        console.log(
            "Imagen resized", 
            resizedImg, 
            resizedImg.getPath(), 
            resizedImg.getFilename(),
            resizedImg.getExt(),
            resizedImg.getWidth(), 
            resizedImg.getHeight()
        );

        await rep.setImage(`./src/assets/resized-images/${resizedImg.getFilename()}${w}${SEP}${h}.${resizedImg.getExt()}`, resizedImg);

        return resizedImg;

    }

}

module.exports = Multimedia