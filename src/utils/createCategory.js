const CategoryRepository = require('../repositories/CategoryRepository')
const Category = require('../models/Category')
const CategoryFactory = require('../factories/CategoryFactory')
const CategoryValidator = require('../validators/categoryValidator')


function crearCategoria(obj) {
    CategoryValidator.categoryValidator(obj.name)
    const category = CategoryFactory.make(obj)
    
    const repoC = new CategoryRepository()
    repoC.create(category)

    return category
}
    
module.exports = crearCategoria;
