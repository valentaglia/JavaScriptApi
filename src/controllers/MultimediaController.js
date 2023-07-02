const Multimedia = require('../../src/Multimedia');
const multer = require('multer');
const fs = require('fs');

class MultimediaController {

    constructor() {
        this.multi = new Multimedia();
    }

    index = (req, res) => {
        try{
            fs.readdir(
                Multimedia.PATH_UPLOAD_IMAGES, 
                function(err, filenames){
                    var data = {
                        files: [],
                    };
                    filenames.forEach(e => { 
                        if(e.indexOf('.empty') === -1){
                            data.files.push(Multimedia.PATH_UPLOAD_IMAGES + e);
                        }
                });
                res.status(200).json(data);
            });
        } catch(ex){
            res.status(500).json({ error: 'Error getting images' });
        }
        
    }

    resizeImage = async (req, res) => {
        try{
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
            //var buffer = ri.getBuffer();
            //var base64 = fs.readFileSync(ri.getPath(), { encoding: 'base64'});
            //var stream = fs.ReadStream(ri.getPath());

            res.status(200).json({ 
                message: 'Image resized',
                path: riPath,
                //base64: base64,
                //stream: stream,
                //buffer: buffer,
            });

        }catch(ex) {
            console.log(ex);
            res.status(500).json({ error: 'Error processing image: ' + ex });
        }
    }

}

module.exports = MultimediaController