const validator = require('../validators/invitarReunionValidator');

function middleware(req, res, next){
    try{
        let guests = req.body.guests
        validator.guestNotEmpty(guests);
        validator.nameLength(guests);
    }catch(e){
        return res.status(422).end(e.message)
    }

    next();
}

module.exports = middleware