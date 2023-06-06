const crearCategoria = require('./src/FunctionCategory')

try{
    let celular = {"name": "Celulares"}
    const resultado = crearCategoria(celular)
    console.log(resultado.getName())
} catch(e){
    console.log(e.message)
}