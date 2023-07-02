const SEP = 'x';
const MSG_ERROR_INVALID_SIZE = 'Tamaño imagen ingresado invalido';
const MSG_ERROR_INVALID_SIZE_WIDTH_GREATER_ZERO = 'El ancho debe ser mayor a 0';
const MSG_ERROR_INVALID_SIZE_HEIGHT_GREATER_ZERO = 'El alto debe ser mayor a 0';
const MSG_ERROR_INVALID_PATH_FILE = 'No existe el archivo en: ';
const MSG_ERROR_IMAGE_NOT_DEFINED = 'Imagen no definida';
const MSG_ERROR_SIZE_NOT_DEFINED = 'Tamaño no definido';
const fs = require('fs');

module.exports = {
    async validateResizeImage(path, size) {

        var split = size.split(SEP);
        var exists = await fs.existsSync(path);
        
        if(!exists) {
            throw(MSG_ERROR_INVALID_PATH_FILE + path);
        }
        if(split.length === 2) {
            if(isNaN(split[0])) {
                throw(MSG_ERROR_INVALID_SIZE);
            }else if(Number(split[0]) <= 0){
                throw(MSG_ERROR_INVALID_SIZE_WIDTH_GREATER_ZERO);
            } else if(isNaN(split[1])){
                throw(MSG_ERROR_INVALID_SIZE);    
            }else if(Number(split[1]) <= 0) {
                throw(MSG_ERROR_INVALID_SIZE_HEIGHT_GREATER_ZERO);
            }
        }else{
            throw(MSG_ERROR_INVALID_SIZE);
        }
    },
    validateResizeImageController(req, res, next){
        if(!req.file){
            res.status(500).json({ error: MSG_ERROR_IMAGE_NOT_DEFINED });
        }else if(!req.body.size){
            res.status(500).json({ error: MSG_ERROR_SIZE_NOT_DEFINED });
        } else {
            next();
        }
    },
}
