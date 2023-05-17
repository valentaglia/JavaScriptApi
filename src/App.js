const {registerValidator} = require('./validators/registerValidator')
const UserFactory = require('./factories/UserFactory')
const UserRepository = require('./repositories/UserRepository')
const bcrypt = require('bcrypt')
const {createProductValidator} = require('./validators/createProductValidator')
const ProductFactory = require('./factories/ProductFactory')
const ProductRepository = require('./repositories/ProductRepository')



class Application {
    constructor() {
        this.name = 'Zoom'
        this.version = '1.0.0'
        this.user = null
    }

    registrar(email, password) {
        registerValidator(email, password)
        
        // encriptarlo sha-512
        password = bcrypt.hashSync(password, 10)
        
        // construyo el objeto user = Factory
        const user = UserFactory.make({
            email, 
            password,
        })
        
        // guardarlo en la base de datos = Repository
        const repo = new UserRepository
        repo.create(user)

        // devolver la instancia del usuario guardado
        return user
    }

    createProduct(name, price, currency, stock){
        createProductValidator(name, price, currency, stock)
        const product = ProductFactory.create({
            name,
            price,
            currency,
            stock
        })
        const repo = new ProductRepository
        repo.create(product)
        return product
    }

    /*  TODO: Esto asi no anda
    createProduct(obj){
        createProductValidator(obj.getName(), obj.getPrice(), obj.getCurrency(), obj.getStock())
        const product = ProductFactory.create(obj)
        const repo = new ProductRepository
        repo.create(product)
        return product
    }
    */

    login(email, password) {
        // validaciones
        // buscar en la base de datos por el email
        // el repositorio de usuarios me devuelve un objeto User
        // setear el User como this.user
    }

    signOut() {
        this.user = null
    }



}

module.exports = Application