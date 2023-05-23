const User = require('../models/User')

class UserFactory {
    static make(obj) {
        let user = new User
        
        user.setId(Date.now())
        user.setEmail(obj.email)
        user.setPassword(obj.password)
        user.setContacts()

        return user
    }
}

module.exports = UserFactory