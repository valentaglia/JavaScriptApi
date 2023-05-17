// Importación de la clase App
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

try{
    const resultado = app.crearCategoria(
        'Celulares'
    )

    console.log(resultado)
} catch(e){
    console.log(e.message)
}
