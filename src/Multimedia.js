const { validateResizeImage } = require('./validators/MultimediaValidator');
const MultimediaStorage = require('./storage/MultimediaStorage');
const DEFAULT_PATH_RESIZED_IMAGES = './src/assets/resized-images/';
const EXT_SEP = '.';

class Multimedia {
    
    async resizeImage(path, size) {
        try{
            const SEP = 'x';

            await validateResizeImage(path, size);

            var sto = new MultimediaStorage();
            var img = await sto.getImage(path);
        
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

            var resizedImg = await sto.resizeImage(img, w, h);

            resizedImg.setPath(`${DEFAULT_PATH_RESIZED_IMAGES}${resizedImg.getFilename()}${w}${SEP}${h}${EXT_SEP}${resizedImg.getExt()}`);

            console.log(
                "Imagen resized", 
                resizedImg, 
                resizedImg.getPath(), 
                resizedImg.getFilename(),
                resizedImg.getExt(),
                resizedImg.getWidth(), 
                resizedImg.getHeight()
            );
        
            await sto.setImage(resizedImg);

            return resizedImg;
            
        }catch(ex){
            console.log(ex);
        }
    }

}

module.exports = Multimedia