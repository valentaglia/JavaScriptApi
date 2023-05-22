const Cart = require('../models/Cart')

class TaxCalculatorRepository{

    tasaImpuesto = 10;

    apply(cart){
        return cart.getSubtotal() * this.tasaImpuesto / 100
    }

    
}