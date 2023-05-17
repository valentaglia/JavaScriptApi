const Category = require('../models/Category')

class CategoryFactory{
    static make(obj){
        let category = new Category

        category.setName(obj.name)

        return category
    }
}

module.exports = CategoryFactory