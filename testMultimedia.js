// Importación de la clase App
const Multimedia = require('./src/Multimedia');

// Instancia de la clase App
const multi = new Multimedia

try {

    multi.resizeImage(
        './src/assets/img/DarthVader.jpg',
        '50x50'
    );

    //test validacion archivo no existente
    multi.resizeImage(
        './src/assets/img/DarthVader1.jpg',
        '50x50'
    );
    
    //test validacion ancho en 0
    multi.resizeImage(
        './src/assets/img/DarthVader.jpg',
        '0x50'
    );

    //test validacion alto en 0
    multi.resizeImage(
        './src/assets/img/DarthVader.jpg',
        '50x0'
    );


    multi.resizeImage(
        './src/assets/img/ArgentinaCampeon2022.jpg',
        '150x120'
    )
    

} catch (e) {
    console.log(e.message)
}