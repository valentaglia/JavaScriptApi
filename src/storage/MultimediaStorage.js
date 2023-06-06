const File = require('../models/File.js');
const MultimediaFactory = require('../factories/MultimediaFactory.js');
const fs = require('fs');
const sharp = require('sharp');
const path = require('path');
const EXT_SEP = '.';

class MultimediaStorage {
    
    async getImage(filepath) {

        var data = {};

        filepath = filepath.replaceAll('/', path.sep);
        var splitPath = filepath.split(path.sep);
        //path filename 
        var fullfilename = splitPath[splitPath.length-1];
        var splitExt = fullfilename.split(EXT_SEP);
        //filename
        var filename = splitExt.slice(0)[0];
        //ext
        var ext = splitExt.slice(1)[0];

        var buffer = await fs.readFileSync(filepath);
        var metadata = await sharp(buffer).metadata();
        
        var width = metadata.width;
        var height = metadata.height;
        
        data.width = width;
        data.height = height;
        data.buffer = buffer;
        data.path = filepath;
        data.filename = filename;
        data.ext = ext;

        var file = MultimediaFactory.make(data);

        return file;

    }

    async resizeImage(image, width, height) {
        
        var data = {};

        var buffer = await sharp(image.getPath()).resize({ 
            width: width, 
            height: height
        }).toBuffer();

        data.width = width;
        data.height = height;
        data.buffer = buffer;
        data.path = image.getPath();
        data.filename = image.getFilename();
        data.ext = image.getExt();
        
        var file = MultimediaFactory.make(data);

        return file;
    }

    async setImage(image){
        console.log("Guardar imagen", image);
        await fs.writeFileSync( 
            image.getPath(), 
            image.getBuffer() 
        );
    }

}

module.exports = MultimediaStorage