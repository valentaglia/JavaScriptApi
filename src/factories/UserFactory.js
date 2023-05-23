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
    //Metodo para obtener el objeto userContact
    static getContact(obj){
        let user = new User
        user.setId(obj.id)
        user.setEmail(obj.email)
        return user
    }
}

module.exports = UserFactory