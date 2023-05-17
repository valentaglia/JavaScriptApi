module.exports = {
    createProductValidator : function (name, price, currency, stock){
        /*
        function isString(attribute) {
            return typeof attribute === "string" || attribute instanceof String;
          }

        if(!isString(name) || name === '' || name === null || name === undefined){
            throw new Error('El nombre es invalido')
        }*/

        const nombreMinLength = 3;
        const nombreMaxLength = 18;
        if(name.length < nombreMinLength || name.length > nombreMaxLength){
            throw new Error('El nombre es invalido');
       }


    }







}