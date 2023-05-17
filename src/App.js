const {registerValidator} = require('./validators/registerValidator')
const {createStoreValidator} = require('./validators/createStoreValidator')
const UserFactory = require('./factories/UserFactory')
const UserRepository = require('./repositories/UserRepository')
const bcrypt = require('bcrypt')
const StoreFactory = require('./factories/StoreFactory')
const Store = require('./models/Store')
const StoreRepository = require('./repositories/StoreRepository')

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

    login(email, password) {
        // validaciones
        // buscar en la base de datos por el email
        // el repositorio de usuarios me devuelve un objeto User
        // setear el User como this.user
    }

    signOut() {
        this.user = null
    }

    createStore(obj){
        createStoreValidator(obj.getName(),obj.getWebsite())
        const store= StoreFactory.make(obj)       
        const repo= new StoreRepository
        repo.create(store)
        return store
    }
}

module.exports = Application