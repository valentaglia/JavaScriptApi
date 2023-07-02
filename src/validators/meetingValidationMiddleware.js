const validator= require('../validators/meetingValidator')
    
function middleware(req, res, next) {

    try {
        let starTime= req.body.starTime
        let duration= req.body.duration
        validator.validateCreation(starTime,duration)
    } catch (e) {
        return res.status(400).end(e.message);

    }
    next()
}

    module.exports=middleware