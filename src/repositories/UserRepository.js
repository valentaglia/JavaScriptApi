const User = require('../models/User')
const Factory = require('../factories/UserFactory')
const Repository = require('./Repository')

class UserRepository extends Repository {
    file = './users.json'

    byId(id) {
        if (isNaN(id)) {
            throw new Error('Se esperaba id numerico')
        }

        let user = this.findById(id)

        if (user === undefined) {
            throw new Error('El usuario no se encontro')
        }

        return Factory.make(user)
    }

    create(user) {
        if (user instanceof User) {
            this.save({
                email: user.getEmail(),
                password: user.getPassword(),
            })

            return;
        }

        throw new Error('Se requiere una instancia de User')
    }
    findByEmail(email) {
        let content = this.read();
        let user = content.find((obj => obj.email == email))
        return Factory.make(user)
    }
}


module.exports = UserRepository