module.exports = {
    categoryValidator: function (name) {

        if (typeof name !== "string" && name != "") {
            throw new Error('Se esperaba un nombre en string')
        }

        const nameMinLength = 1
        const nameMaxLength = 100

        if(name.length < nameMinLength){
            throw new Error (`El nombre tiene que tener como minimo ${nameMinLength} caracteres`)
        }

        if(name.length > nameMaxLength){
            throw new Error (`El nombre tiene que tener como maximo ${nameMaxLength} caracteres`)
        }
    }
}