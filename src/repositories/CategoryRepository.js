const User = require('../models/User')
const Factory = require('../factories/UserFactory')
const Repository = require('./Repository')
const Category = require('../models/Category')

class CategoryRepository extends Repository{

    file = './examples/Category.json'

    create(category){
        if(category instanceof Category){
            this.save({
                name: category.getName()
            })
            return;
        }

        throw new Error('Se requiere una categoria')
    }
}

module.exports = CategoryRepository