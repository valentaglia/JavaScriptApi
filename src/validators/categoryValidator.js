module.exports = {
    categoryValidator: function (name) {

        if (typeof name !== "string" && name != "") {
            throw new Error('Se esperaba un nombre en string')
        }
    }
}