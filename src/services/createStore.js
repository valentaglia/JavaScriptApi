const StoreFactory = require("../factories/StoreFactory")
const StoreRepository = require("../repositories/StoreRepository")
const { createStoreValidator } = require('../validators/createStoreValidator')

module.exports = {
    createStore: function (obj) {
        createStoreValidator(obj.name, obj.website)
        const store = StoreFactory.make(obj)
        const repo = new StoreRepository
        repo.create(store)
        return store
    }
}
