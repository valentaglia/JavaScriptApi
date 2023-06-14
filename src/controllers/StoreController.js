const {createStore} = require("../createStore")
const StoreRepository = require("../repositories/StoreRepository")
class StoreController {
    constructor() {
        this.repo = new StoreRepository()
    }
    index = (req, res) => {
        res.json(this.repo.read())
    }
    show = (req, res) => {
        let store = this.repo.findById(req.params.id)
        if (store !== null && store !== undefined) {
            res.status(200).json(store)
        } else {
            res.status(404).end("Store no encontrada")
        }
    }
    create = (req, res) => {
        try {
            createStore(req.body)
            res.status(201).end("Created")
        } catch (e) {
            res.status(400).end(e.message)
        }
    }
    update = (req, res) => {

    }
    delete = (req, res) => {
        
    }
}
module.exports = StoreController