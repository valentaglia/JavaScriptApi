// Importación de la clase App
const App = require('./src/App')

// Instancia de la clase App
const app = new App

const Mailer = require('./src/AppMailer')

const appMailer = new Mailer

try {
    const result = app.registrar(
        'cosme@fulanito.fox',   // email
        'secretoo'             // password
    )

    console.log(result)
} catch (e) {
    console.log(e.message)
}

let data = {
    de : "cosme-fulanito",
    para : "hermano-funalito",
    asunto : "Saludo",
    cuerpo : "Hola, ¿Como estas?"
}

let archivo = './Purchase-Email.txt'

let mensaje = appMailer.template(archivo, data)

console.log(mensaje)