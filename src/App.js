const {registerValidator} = require('./validators/registerValidator')
const {loginValidator} = require('./validators/loginValidator')
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
        this.chat = null;
        this.user = null
        this.contact = null
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
        this.user = user;
        this.user = user;
        // devolver la instancia del usuario guardado
        return user
    }

    login(email, password) {
        loginValidator(email, password)
        loginValidator(email, password)

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

        if (!bcrypt.compareSync(password, user.getPassword())) {
            throw new Error("La contraseña es incorrecta")
        }

        if (!bcrypt.compareSync(password, user.getPassword())) {
            throw new Error("La contraseña es incorrecta")
        }

        this.user = user
        this.chat = new Chat(this.user);




        return user
    }

    signOut() {
        this.user = null
    }

    sendMessage(message) {
        this.chat.sendMessage(message);
    }



    setUser(user) {
        this.user = user;
    }
}

module.exports = Application;
