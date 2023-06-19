const ProductRepository = require('../repositories/ProductRepository')



class ProductsController {

    constructor() {
        this.repo = new ProductRepository
    }

    index = (req, res) => {
        let products = this.repo.all()

        res.json(products)
    }

    show = (req, res) => {
        try {
          // Me fijo si el producto con ese id existe
            let prod = this.repo.findById(req.params.id)
            if (!prod) {
              return res.status(404).json({ error: 'PRODUCT_NOT_FOUND' });
          }
            res.json(prod)
        } catch (e) {
            res.json({ error: e.message })
        }
    }

    create = (req, res) => {

        //guardo
        this.repo.save({
            name: req.body.name,
            price: req.body.price,
            currency: req.body.currency,
            stock: req.body.stock
        })

        //respondo
        res.status(201).json({message: 'PRODUCT_CREATED_SUCCESFULLY'})

    }


    update = (req, res) => {
        try {
          const id = req.params.id;
          const { name, price, currency, stock } = req.body;
      
          // Me fijo si el producto con ese id existe
          const product = this.repo.findById(id);
          if (!product) {
            return res.status(404).json({ error: 'PRODUCT_NOT_FOUND' });
          }

          // Actualizo/Cambio con los datos nuevos
          product.name = name;
          product.price = price;
          product.currency = currency;
          product.stock = stock;
          
          // Actualizo el producto
          this.repo.update(id, product);
          
          // Mando mensaje de exito
          res.status(200).json({ message: 'PRODUCT_UPDATED_SUCCESFULLY' });
        } catch (error) {
          res.status(500).json({ error: error.message });
        }
      };
      

      delete = (req, res) => {
        try {
          const id = req.params.id;
      
          // Me fijo si el producto con ese id existe
          const product = this.repo.findById(id);
          if (!product) {
            return res.status(404).json({ error: 'PRODUCT_NOT_FOUND' });
          }
      
          // Borro el producto
          this.repo.delete(id);
          
          // Mando mensaje de exito
          res.status(200).json({ message: 'PRODUCT_DELETED_SUCCESFULLY' });
        } catch (error) {
          res.status(500).json({ error: error.message });
        }
      };
      


}

module.exports = ProductsController