const validator = require("../validators/notificationValidator.js");

function middleware (req, res, next) {
    try {
        validator.keyIsEmpty(req.body.key);
        validator.keyTooLong(req.body.key);
        validator.textIsEmpty(req.body.text);
        validator.textTooLong(req.body.text);
        validator.sendDateIsEmpty(req.body.sendDate);
        validator.readDateIsEmpty(req.body.readDate);
        validator.compareDates(req.body.sendDate, req.body.readDate);
    }
    catch (e) {
        return res.status(422).end(e.message);
    }
    
    next();
}

module.exports = middleware