// Importación de la clase App
const Multimedia = require('./src/Multimedia');

// Instancia de la clase App
const app = new Multimedia

try {

    app.resizeImage(
        './src/assets/img/DarthVader.jpg',
        '50x50'
    )

    app.resizeImage(
        './src/assets/img/ArgentinaCampeon2022.jpg',
        '150x120'
    )
    

} catch (e) {
    console.log(e.message)
}