module.exports = {
    categoryValidator: function (name) {

        if (typeof name !== "string") {
            throw new Error('Se esperaba un nombre en string')
        }
    }
}