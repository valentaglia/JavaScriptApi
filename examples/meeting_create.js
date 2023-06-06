const Mailer = require('./src/AppMailer')

const appMailer = new Mailer

// Importación de la clase App
const App = require('./src/App')

// Intancia de la clase App
try {
    const calendar = new App

    const meeting = calendar.createMeeting(
        "2023-06-03",
        "17:30",
        30,
    )
} catch (e) {
    console.log(e.message)
}
