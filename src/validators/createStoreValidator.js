module.exports = {
    createStoreValidator: function (name, website) {
        const websiteRegex = new RegExp(/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/, 'ig')
        const nameMinLenght=5
        const nameMaxLenght=25
        if (!websiteRegex.test(website)) {
            throw new Error('El website es invalido')
        }
        if (name.length < nameMinLenght) {
            throw new Error(`El nombre debe tener como minimo ${nameMinLenght} caracteres`)
        }
        if (name.length > nameMaxLenght) {
            throw new Error(`El nombre debe tener como maximo ${nameMaxLenght} caracteres`)
        }
    }
}