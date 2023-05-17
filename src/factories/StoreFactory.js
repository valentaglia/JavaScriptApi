const Store = require('../models/Store')
class StoreFactory {
    static create(obj) {
        let store = new Store()
        store.setName(obj.name)
        store.setWebsite(obj.website)
        return store
    }
}
module.exports = StoreFactory