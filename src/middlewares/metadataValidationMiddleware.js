const validator = require('../validators/metadataValidator')


function middleware (req, res, next) {
try{

    let type = req.body.type
    validator.typeNotEmpty(type)
    validator.typeLength(type)
    let mime = req.body.mime
    validator.mimeNotEmpty(mime)
    validator.mimeLength(mime)
    let width = req.body.width
    validator.widthNotEmpty(width)
    validator.widthLength(width)
    let height = req.body.height
    validator.heightNotEmpty(height)
    validator.heightLength(height)

}catch (e){
    return res.status(422).end(e.message)
}


next()
}

module.exports = middleware