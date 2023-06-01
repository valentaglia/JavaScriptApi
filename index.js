// Importación de la clase App
const App = require('./src/App')

// Instancia de la clase App
const app = new App
/*
try {
    const result = app.registrar(
        'cosme@fulanito.fox',   // email
        'secretoo'             // password
    )

    console.log(result)
} catch (e) {
    console.log(e.message)
}*/

// Intancia de la clase App
try{

    const calendar = new App

    const meeting = calendar.createMeeting(
        "2023-06-03",
        "17:30",
         30,
        )

}catch(e){
    console.log(e.message)
}

