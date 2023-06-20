const { nameLength } = require('../validators/categoryValidator')

function validatorMiddleware(req, res, next) {
    try {
        let name = req.body.name;
        nameLength(name);
    } catch (e) {
        return res.status(422).end(e.message);
    }

    next();
}

module.exports = validatorMiddleware