const { create } = require('../utils/createCategory')
const CategoryRepository = require('../repositories/CategoryRepository')

class CategoryController {

    constructor() {
        this.repo = new CategoryRepository
    }

    index = (req, res) => {
        res.json(this.repo.read())
    }

    show = (req, res) => {
        try {
            let category = this.repo.findById(req.params.id)
            res.json(category)
        } catch (e) {
            res.json({ error: e.message() })
        }
    }

    create = (req, res) => {
        try {
            create(req.body)
            res.status(201).end('Creado')
        } catch (e) {
            res.status(400).end("INVALID_CREATION")
        }
    }

    update = (req, res) => {
        try {
            const id = req.params.id;
            const category = this.repo.findById(id)
            const{name} = req.body

            if(name.value == 0){
                return res.status(404).json({error: 'INVALID_NAME'})
            }

            if(category == null){
                return res.status(404).json({error: 'CATEGORY_NOT_FOUND'})
            }

            category.name = name;

        }catch(e){
            res.status(400).end(e.message())
        }

        
    }

    delete = (req, res) => {

        try {
            const id = req.params.id

            const category = this.repo.findById(id)
            if (category != null) {
                return res.status(404).json({ error: 'CATEGORY_NOT_FOUND' })
            } else {
                this.repo.delete(category)
                return res.status(201).json({ message: 'CATEGORY_DELETE' })
            }
        } catch (e) {
            res.status(400).end(e.message())
        }
    }
}

module.exports = CategoryController