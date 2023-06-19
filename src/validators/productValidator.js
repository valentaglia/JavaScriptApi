const { currencyCodes } = require('../utils/constanteCurrencyCodes');

module.exports = {


       
    nameNotEmpty(data){
        if ((data === '' || data === null || data === undefined)) {
            throw new Error('NAME_IS_EMPTY');
        }
    },
    nameCantBeNumber(data){
        if (!(typeof data === "string")) {
            throw new Error('NAME_CANNOT_BE_NUMBER');
        }
    },


    nameTooShort(data){
        if (data.length <3 ) {
            throw new Error('NAME_TOO_SHORT');
        }
    },
    nameTooLong(data){
        if (data.length >18 ) {
            throw new Error('NAME_TOO_LONG');
        }
    },
    nonExistentCurrency(data){
        if (!(typeof data === "string") || currencyCodes.find(element => element === data.toUpperCase()) === undefined) {
            throw new Error('NON_EXISTENT_CURRENCY');
        }
    },
    priceLowerZero(data){
        if (data <= 0 ) {
            throw new Error('PRICE_CANNOT_BE_LOWER_THAN_ZERO');
        }
    },
    priceNotANumber(data){
        if (!( typeof data === "number")) {
            throw new Error('PRICE_MUST_BE_A_NUMBER');
        }
    },
    stockNotInteger(data){
        if (!(Number.isInteger(data))) {
            throw new Error('STOCK_MUST_BE_AN_INTEGER');
        }
    },
    stockLowerZero(data){
        if (data < 0) {
            throw new Error('STOCK_CANNOT_BE_LOWER_THAN_ZERO');
        }
    }

}