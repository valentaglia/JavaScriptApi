module.exports = {
    createCartValidator: function (user_id, items) {
        if (isNaN(user_id)) {
            throw new Error(`El ID de usuario es inválido`)
        }
        if (items.length < 1) {
            throw new Error(`Debe haber al menos un item dentro del carrito`)
        }
    }
}