const Store = require('../models/Store')
class StoreFactory {
    static make(obj) {
        let store = new Store()
        store.setName(obj.name)
        store.setWebsite(obj.website)
        return store
    }
}
module.exports = StoreFactory