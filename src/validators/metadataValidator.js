module.exports = {

    typeNotEmpty(data){
        if (data.length === 0){
            throw new Error ('TYPE_IS_EMPTY')
        }
    },
    typeLength(data){
        if (data.length > 8){
            throw new Error ('TYPE_TOO_LONG')
        }
    },
    mimeNotEmpty(data){
        if (data.length === 0){
            throw new Error ('MIME_IS_EMPTY')
        }
    },
    mimeLength(data){
        if (data.length > 15){
            throw new Error ('MIME_TOO_LONG')
        }
    },
    widthNotEmpty(data){
        if (data.length === 0){
            throw new Error ('WIDTH_IS_EMPTY')
        }
    },
    widthLength(data){
        if (data.length > 8){
            throw new Error ('WIDTH_TOO_LONG')
        }
    },
    heightNotEmpty(data){
        if (data.length === 0){
            throw new Error ('HEIGHT_IS_EMPTY')
        }
    },
    heightLength(data){
        if (data.length > 8){
            throw new Error ('HEIGHT_TOO_LONG')
        }
    }

}




