const User = require('../models/User')
const Factory = require('../factories/UserFactory')
const Repository = require('./Repository')
class UserRepository extends Repository {
    file = 'D:/ORT/2do año Primer Cuatrimestre/TP2/ProyectoTP2/ORT-2023-1/src/users.json'

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
                id: user.getId(),
                email : user.getEmail(),
                password : user.getPassword(),
            })

            return;
        }

        throw new Error('Se requiere una instancia de User')
    }
}

module.exports = UserRepository