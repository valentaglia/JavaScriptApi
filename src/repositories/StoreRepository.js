const Store = require('../models/Store')
const Factory = require('../factories/StoreFactory')
const Repository = require('./Repository')
class StoreRepository extends Repository {
        file = './stores.json'
        create(store) {
                if (store instanceof Store) {
                        this.save({
                                name: store.getName(),
                                website: store.getWebsite(),
                        })
                        return;
                }
                throw new Error('Se requiere una instancia de Store')
        }
}
module.exports = StoreRepository 