// Importación de la clase App
const {createProduct} = require('./src/createProduct')
// Instancia de la clase App


try {
    const result = createProduct(
        "Iphone XXI",
        5600.99,
        "USD",
        10
    )

    console.log(result.getCurrency())//getId() no anda pero con el de users tampoco
} catch (e) {
    console.log(e.message)
}