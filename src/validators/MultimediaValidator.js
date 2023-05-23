module.exports = {
    validateResizeImage(path, size){
        const MSG_ERROR_INVALID_SIZE = 'Size ingresado invalido';
        const SEP = 'x';
        var split = size.split(SEP);
        if(split.length === 2){
            if(isNaN(split[0])){
                throw(MSG_ERROR_INVALID_SIZE);
            }else if(isNaN(split[1])){
                throw(MSG_ERROR_INVALID_SIZE);    
            }
        }else{
            throw(MSG_ERROR_INVALID_SIZE);
        }
    }
}
