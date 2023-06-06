module.exports = {
    loginValidator: function (email, password) {
        const emailRegex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'i')

        if (!emailRegex.test(email)) {
            throw new Error('El email es invalido')
        }

        if (password === undefined) {
            throw new Error(`El password es invalido`)
        }
    }
}
