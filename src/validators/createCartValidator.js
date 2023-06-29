module.exports = {
    validUserId(id) {
        if (isNaN(id)) {
            throw new Error(`El ID de usuario es inválido`)
        }
    },
    validItemsAmount(len) {
        if (len < 1) {
            throw new Error(`Debe haber al menos un item dentro del carrito`)
        }
    }
}