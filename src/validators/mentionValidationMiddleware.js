// Archivo: mentionValidationMiddleware.js

const validator = require('../validators/mentionValidator')

function mentionValidationMiddleware(req, res, next) {
    try {
        let message = req.body.message;
        validator.messageNoEmpty(message);
        validator.messageLength(message);
        validator.messageIncludes(message);
    } catch (e) {
        return res.status(400).end(e.message);
    }
    next();
}

module.exports = mentionValidationMiddleware;
