module.exports = {

    typeNotEmpty(data){
        if (data.type.length === 0){
            throw new Error ('TYPE_IS_EMPTY')
        }
    },
    typeLength(data){
        if (data.type.length > 8){
            throw new Error ('TYPE_TOO_LONG')
        }
    },
    mimeNotEmpty(data){
        if (data.mime.length === 0){
            throw new Error ('MIME_IS_EMPTY')
        }
    },
    mimeLength(data){
        if (data.mime.length > 15){
            throw new Error ('MIME_TOO_LONG')
        }
    },
    widthNotEmpty(data){
        if (data.width.length === 0){
            throw new Error ('WIDTH_IS_EMPTY')
        }
    },
    widthLength(data){
        if (data.width.length > 8){
            throw new Error ('WIDTH_TOO_LONG')
        }
    },
    heightNotEmpty(data){
        if (data.height.length === 0){
            throw new Error ('HEIGHT_IS_EMPTY')
        }
    },
    heightLength(data){
        if (data.height.length > 8){
            throw new Error ('HEIGHT_TOO_LONG')
        }
    }

}




