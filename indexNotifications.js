// Importación de la clase App
//const App = require('./src/App')
const AppNotification = require('./src/AppNotification')

// Instancia de la clase App
//const app = new App
const app = new AppNotification

try { 
    const result = app.saveNotification({
        key: "lorem ipsum test",
        text: "Lorem ipsum dolor situm amet",
        sendDate: "2023-06-12 19:45:35",
        readDate: null
    })

    console.log(result)
} catch (e) {
    console.log(e.message)
}
