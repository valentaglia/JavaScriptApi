const {create} = require('../createCategory')
const CategoryRepository = require('../repositories/CategoryRepository')

class CategoryController{
    
    constructor(){
        this.repo = new CategoryRepository
    }

    index = (req, res) =>{
        res.json(this.repo.read())
    }

    show = (req, res) =>{
        try{
            let category = this.repo.findById(req.params.id)
            res.json(category)
        }catch(e){
            res.json({error: e.message()})
        }
    }

    create = (req, res) =>{
        try{
            create(req.body)
            res.status(201).end('Creado')
        }catch(e){
            res.status(400).end(e.message())
        }
    }

    updated = (req, res) =>{

    }

    deleted = (req, res) => {

    }
}

module.exports = CategoryController