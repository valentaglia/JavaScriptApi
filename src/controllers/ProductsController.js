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
        //valido
        if (req.body.name.length === 0) {
            return res.status(422).end('NAME_IS_EMPTY')
        }

        if (req.body.name.length < 3) {
            return res.status(422).end('NAME_TOO_SHORT')
        }

        if (req.body.name.length > 18) {
            return res.status(422).end('NAME_TOO_LONG')
        }
        const currencyCodes = ["AED", "AFN", "ALL", "AMD", "ANG", "AOA", "ARS", "AUD", "AWG", "AZN", "BAM", "BBD", "BDT", "BGN", "BHD", "BIF", "BMD", "BND", "BOB", "BOV", "BRL", "BSD", "BTN", "BWP", "BYR", "BZD", "CAD", "CDF", "CHE", "CHF", "CHW", "CLF", "CLP", "CNY", "COP", "COU", "CRC", "CUC", "CUP", "CVE", "CZK", "DJF", "DKK", "DOP", "DZD", "EGP", "ERN", "ETB", "EUR", "FJD", "FKP", "GBP", "GEL", "GHS", "GIP", "GMD", "GNF", "GTQ", "GYD", "HKD", "HNL", "HRK", "HTG", "HUF", "IDR", "ILS", "INR", "IQD", "IRR", "ISK", "JMD", "JOD", "JPY", "KES", "KGS", "KHR", "KMF", "KPW", "KRW", "KWD", "KYD", "KZT", "LAK", "LBP", "LKR", "LRD", "LSL", "LTL", "LVL", "LYD", "MAD", "MDL", "MGA", "MKD", "MMK", "MNT", "MOP", "MRO", "MUR", "MVR", "MWK", "MXN", "MXV", "MYR", "MZN", "NAD", "NGN", "NIO", "NOK", "NPR", "NZD", "OMR", "PAB", "PEN", "PGK", "PHP", "PKR", "PLN", "PYG", "QAR", "RON", "RSD", "RUB", "RWF", "SAR", "SBD", "SCR", "SDG", "SEK", "SGD", "SHP", "SLL", "SOS", "SRD", "SSP", "STD", "SYP", "SZL", "THB", "TJS", "TMT", "TND", "TOP", "TRY", "TTD", "TWD", "TZS", "UAH", "UGX", "USD", "USN", "USS", "UYI", "UYU", "UZS", "VEF", "VND", "VUV", "WST", "XAF", "XAG", "XAU", "XBA", "XBB", "XBC", "XBD", "XCD", "XDR", "XFU", "XOF", "XPD", "XPF", "XPT", "XTS", "XXX", "YER", "ZAR", "ZMW"];

        if (currencyCodes.find(element => element === req.body.currency.toUpperCase()) === undefined) {
            return res.status(422).end('NON_EXISTENT_CURRENCY')
        }

        if (req.body.price <= 0) {
            return res.status(422).end('PRICE_CANNOT_BE_LOWER_THAN_ZERO')
        }

        if (!(typeof req.body.price === "number")) {
            return res.status(422).end('PRICE_MUST_BE_A_NUMBER')
        }

        if (!(Number.isInteger(req.body.stock))) {
            return res.status(422).end('STOCK_MUST_BE_AN_INTEGER')
        }

        if (req.body.stock < 0) {
            return res.status(422).end('STOCK_CANNOT_BE_LOWER_THAN_ZERO')
        }

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
      
          // Valido los datos nuevos
          if (name.length === 0) {
            return res.status(422).json({ error: 'NAME_IS_EMPTY' });
          }
          if (name.length < 3) {
            return res.status(422).json({ error: 'NAME_TOO_SHORT' });
          }
          if (name.length > 18) {
            return res.status(422).json({ error: 'NAME_TOO_LONG' });
          }
          const currencyCodes = ["AED", "AFN", "ALL", "AMD", "ANG", "AOA", "ARS", "AUD", "AWG", "AZN", "BAM", "BBD", "BDT", "BGN", "BHD", "BIF", "BMD", "BND", "BOB", "BOV", "BRL", "BSD", "BTN", "BWP", "BYR", "BZD", "CAD", "CDF", "CHE", "CHF", "CHW", "CLF", "CLP", "CNY", "COP", "COU", "CRC", "CUC", "CUP", "CVE", "CZK", "DJF", "DKK", "DOP", "DZD", "EGP", "ERN", "ETB", "EUR", "FJD", "FKP", "GBP", "GEL", "GHS", "GIP", "GMD", "GNF", "GTQ", "GYD", "HKD", "HNL", "HRK", "HTG", "HUF", "IDR", "ILS", "INR", "IQD", "IRR", "ISK", "JMD", "JOD", "JPY", "KES", "KGS", "KHR", "KMF", "KPW", "KRW", "KWD", "KYD", "KZT", "LAK", "LBP", "LKR", "LRD", "LSL", "LTL", "LVL", "LYD", "MAD", "MDL", "MGA", "MKD", "MMK", "MNT", "MOP", "MRO", "MUR", "MVR", "MWK", "MXN", "MXV", "MYR", "MZN", "NAD", "NGN", "NIO", "NOK", "NPR", "NZD", "OMR", "PAB", "PEN", "PGK", "PHP", "PKR", "PLN", "PYG", "QAR", "RON", "RSD", "RUB", "RWF", "SAR", "SBD", "SCR", "SDG", "SEK", "SGD", "SHP", "SLL", "SOS", "SRD", "SSP", "STD", "SYP", "SZL", "THB", "TJS", "TMT", "TND", "TOP", "TRY", "TTD", "TWD", "TZS", "UAH", "UGX", "USD", "USN", "USS", "UYI", "UYU", "UZS", "VEF", "VND", "VUV", "WST", "XAF", "XAG", "XAU", "XBA", "XBB", "XBC", "XBD", "XCD", "XDR", "XFU", "XOF", "XPD", "XPF", "XPT", "XTS", "XXX", "YER", "ZAR", "ZMW"];

          if (!currencyCodes.includes(currency.toUpperCase())) {
            return res.status(422).json({ error: 'NON_EXISTENT_CURRENCY' });
          }
          if (price <= 0) {
            return res.status(422).json({ error: 'PRICE_CANNOT_BE_LOWER_THAN_ZERO' });
          }
          if (typeof price !== 'number') {
            return res.status(422).json({ error: 'PRICE_MUST_BE_A_NUMBER' });
          }
          if (!Number.isInteger(stock)) {
            return res.status(422).json({ error: 'STOCK_MUST_BE_AN_INTEGER' });
          }
          if (stock < 0) {
            return res.status(422).json({ error: 'STOCK_CANNOT_BE_LOWER_THAN_ZERO' });
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