const Product = require('../models/Product')
const Factory = require('../factories/ProductFactory')
const Repository = require('./Repository')
const { error } = require('console');
const fs = require('fs')
const sharp = require('sharp')

class ProductRepository extends Repository{
    file = './examples/products.json'

    create(product){
        if(product instanceof Product){
            this.save({
                name : product.getName(),
                price : product.getPrice(),
                currency : product.getCurrency(),
                stock : product.getStock()
            })

            return
        }

        throw new Error('INSTANCE_OF_PRODUCT_NEEDED')

    }

    all() {
        try{
            return super.read();
        }catch(error){
            console.error('ERROR_READING_PRODUCTS:', error);
            return [];
        }
    }


    findById(id) {
        if (isNaN(id)) {
            throw new Error('INVALID_ARGUMENT')
        }

        return super.findById(id)
    }
    delete(id) {
        const content = this.read();
    
        const index = content.findIndex((obj) => obj.id == id);
        if (index !== -1) {
          content.splice(index, 1);
    
          const updatedContent = JSON.stringify(content);
    
          fs.writeFileSync(this.file, updatedContent);
    
          return true;
        }
    
        return false;
      }

      update(id, newData) {
        let content = this.read();
            
        const index = content.findIndex((obj) => obj.id == id);
    
        if (index === -1) {
          throw new Error('PRODUCT_NOT_FOUND');
        }
    
        
        content[index] = { ...content[index], ...newData };
    
        content = JSON.stringify(content);
    
        fs.writeFileSync(this.file, content);
    
        return true;
      }
    
}

module.exports = ProductRepository