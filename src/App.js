const {registerValidator} = require('./validators/registerValidator')
const {loginValidator} = require('./validators/loginValidator')
const UserFactory = require('./factories/UserFactory')
const UserRepository = require('./repositories/UserRepository')
const bcrypt = require('bcrypt')

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

        loginValidator(email, password)
        const repo = new UserRepository
        const user = repo.searchUser(email)
        
        if(!bcrypt.compareSync(password,user.getPassword()))
        {
            throw new Error("La contraseña es incorrecta")
        }
        this.user = user
        // setear el User como this.user
        return this.user
    }

    signOut() {
        this.user = null
    }

    
}

module.exports = Application