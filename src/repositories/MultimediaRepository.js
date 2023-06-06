const File = require('../models/File.js')
const Factory = require('../factories/MultimediaFactory')
const Repository = require('./Repository')
const fs = require('fs');
const sharp = require('sharp');

class MultimediaRepository extends Repository {
    byPath(path) {
        //Buscar archivo imagen
    }
    
    async getImage(path){
        const PATH_SEP = '/';
        const EXT_SEP = '.';
        var data = {};

        var splitPath = path.split(PATH_SEP);
        var fullfilename = splitPath[splitPath.length-1];
        var splitExt = fullfilename.split(EXT_SEP);
        var filename = splitExt[0];
        var ext = splitExt[splitExt.length-1];

        console.log(filename, ext);
        var buffer = await fs.readFileSync(path);
        
        data.buffer = buffer;
        data.filename = filename;
        data.ext = ext;

        return data;
    }

    async getFileStat(path){
        return stat;
    }

    async resizeImage(image, width, height) {

        var data = {};
        console.log("Path", image.getPath());
        var b = await sharp(image.getPath()).resize({ width: width, height: height }).toBuffer();
        data.buffer = b;
        data.width = width;
        data.height = height;


        return data;
    }

    async setImage(path, img){
        console.log("Imagen a guardar", img);
        await fs.writeFileSync( path, img.getBuffer() );
    }

}

module.exports = MultimediaRepository