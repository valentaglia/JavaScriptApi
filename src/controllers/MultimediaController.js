const Multimedia = require('../../src/Multimedia');
const multer = require('multer');
const fs = require('fs');
const PATH_UPLOAD_IMAGES = './src/assets/img';

class MultimediaController {

    constructor() {
        this.multi = new Multimedia();
    }

    index = (req, res) => {
        res.send('<h1>Multimedia</h1>');
    }

    resizeImage = async (req, res) => {
        try{
            console.log(req.file);
            //Ruta al archivo
            var path = req.file.path;
            
            //Size de la imagen
            var size = req.body.size;

            //Redimensionar imagen
            var ri = await this.multi.resizeImage(
                path, 
                size
            );
            
            var riPath = ri.getPath();
            var buffer = ri.getBuffer();
            var base64 = fs.readFileSync(ri.getPath(), { encoding: 'base64'});
            var stream = fs.ReadStream(ri.getPath());

            res.status(200).json({ 
                msg: 'Image resized',
                path: riPath,
                //base64: base64,
                //stream: stream,
                //buffer: buffer,
            });

        }catch(ex) {
            res.status(500).json({ error: 'Error processing image' });
        }
    }

}

module.exports = MultimediaController