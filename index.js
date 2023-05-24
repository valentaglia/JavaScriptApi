// Importación de la clase App
const App = require('./src/App')

// Instancia de la clase App
const app = new App

const Mailer = require('./src/AppMailer')

const appMailer = new Mailer

const PurchaseEmail = require('./src/models/purchase_email')

const message = new PurchaseEmail

try {
    const result = app.registrar(
        'cosme@fulanito.fox',   // email
        'secretoo'             // password
    )

    console.log(result)
} catch (e) {
    console.log(e.message)
}

//La app se trae el objeto lodash
const _ = appMailer.getMailer()
// El archivo "purchase-email.js" tiene la formula del mensaje
//
const estructura = _.template(message.buildMessage(), {
    De : "cosme-funalito"
})

console.log(estructura)
//Data para testear
let data = {
    de : "cosme-fulanito",
    para : "hermano-funalito",
    asunto : "Saludo",
    cuerpo : "Hola, ¿Como estas?"
}
//Utilizo la estructura llamada desde la clase purchase_email.
const mensaje = estructura(data)

console.log(mensaje)