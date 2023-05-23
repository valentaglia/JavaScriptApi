// Importación de la clase App
const App = require('./src/App')

// Instancia de la clase App
const app = new App

try {
    const result = app.createProduct(
        "Iphone XXI",
        5600.99,
        "USD",
        10
    )

    console.log(result.getCurrency())
} catch (e) {
    console.log(e.message)
}



/*// Importación de la clase App
const App = require('./src/App')

// Instancia de la clase App
const app = new App

try {
    const result = app.registrar(
        'cosme@fulanito.fox',   // email
        'secretoo'             // password
    )

    console.log(result)
} catch (e) {
    console.log(e.message)
}
*/
