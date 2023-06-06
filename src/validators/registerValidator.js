module.exports = {
    registerValidator: function (email, password) {
        const emailRegex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'i')

        if (!emailRegex.test(email)) {
            throw new Error('El email es invalido')
        }

        const passwordMinLength = 8

        if (password.length < passwordMinLength) {
            throw new Error(`El password debe tener como minimo ${passwordMinLength} caracteres`)
        }

        const passwordMaxLength = 16

        if (password.length > passwordMaxLength) {
            throw new Error(`El password debe tener como maximo ${passwordMaxLength} caracteres`)
        }
    }
}