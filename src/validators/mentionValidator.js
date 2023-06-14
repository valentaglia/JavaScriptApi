module.exports = {
    messageNotEmpty(value){
        if(value.length===0){
            throw new Error ('MESSAGE_IS_EMPTY')
        }
    },

    messageLength(data){
        if(value.length>100){
            throw new Error ('MESSAGE_IS_TOO_LONG')
        }
    },
        
       
    }










