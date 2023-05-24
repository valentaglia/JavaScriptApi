
class TaxCalculatorRepository{

    tasaImpuesto = 10;

    apply(cart){
        return cart.getSubtotal() * this.tasaImpuesto / 100
    }

    
}

module.exports = TaxCalculatorRepository