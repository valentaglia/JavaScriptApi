const { registerValidator } = require('./validators/registerValidator')
const UserFactory = require('./factories/UserFactory')
const UserRepository = require('./repositories/UserRepository')
const bcrypt = require('bcrypt')
const extraerMenciones = require('./utils/extraerMenciones');
const User = require('./models/User');
const Chat = require('./models/Chat');

class Application {
    constructor() {
        this.name = 'Zoom'
        this.version = '1.0.0'
        this.user = null;
        this.chat = new Chat();
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
        if (!email || !password) {
            throw new Error('El email y la contraseña son obligatorios')
        }

        // buscar en la base de datos
        const repo = new UserRepository()
        const user = repo.findByEmail(email, password)

        if (!user) {
            throw new Error('No se encontró ningún usuario con ese email')
        }

        // comparar contraseñas
        const passwordMatch = bcrypt.compareSync(password, user.getPassword())

        if (!passwordMatch) {
            throw new Error('La contraseña es incorrecta')
        }

        // setear el User como this.user
        this.user = user

        
 
        return user
    }


    signOut() {
        this.user = null
    }
    setUser(user) {
        this.user = user;
    }
    sendMessage(message) {
        this.chat.sendMessage(message);
    }


}


module.exports = Application;
