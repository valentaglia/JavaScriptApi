const validator = require('../validators/meetValidator')

function middleware (req, res, next){

    try{

        validator.dateNotEmpty(req.body)
        validator.timeNotEmpty(req.body)
        validator.durationNotEmpty(req.body)
        validator.durationOutOfRange(req.body)
        validator.dateValidator(req.body)

    } catch (e) {
        return res.status(422).end(e.message)
    }
    next()
}

module.exports = middleware