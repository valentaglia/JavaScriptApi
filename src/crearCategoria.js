const CategoryRepository = require('./repositories/CategoryRepository')
const Category = require('./models/Category')

const name = Category.name

crearCategoria(name) 
    categoryValidator(name)
    const category = CategoryFactory.make({
        name
    })
    
    const repoC = new CategoryRepository
    repoC.create(category)

    return category
