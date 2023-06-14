module.exports = {
    validWebSite(website) {
        const websiteRegex = new RegExp(/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/, 'ig')
        if (!websiteRegex.test(website)) {
            throw new Error('El website es invalido')
        }
    },
    nameLenght(name) {
        const nameMinLenght = 3
        const nameMaxLenght = 25
        if (name.length < nameMinLenght) {
            throw new Error(`El nombre debe tener como minimo ${nameMinLenght} caracteres`)
        }
        if (name.length > nameMaxLenght) {
            throw new Error(`El nombre debe tener como maximo ${nameMaxLenght} caracteres`)
        }
    }
}