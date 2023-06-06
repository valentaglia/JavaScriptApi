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
