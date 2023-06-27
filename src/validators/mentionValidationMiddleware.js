const validator= require('../validators/mentionValidator')
    
function middleware(req, res, next) {

    try {
        let name= req.body.name
        validator.messageNotEmpty(name)
        validator.messageLength(name)
        validator.messageIncludes(name)
    } catch (e) {
        return res.status(400).end(e.message);

    }
    next()
}

    module.exports=middleware