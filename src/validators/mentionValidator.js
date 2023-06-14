module.exports = {
    messageNotEmpty(data){
        if(data.name.length===0){
            throw new Error ('MESSAGE_IS_EMPTY')
        }
    },

    messageNotEmpty(data){
        if(data.name.length>100){
            throw new Error ('MESSAGE_IS_TOO_LONG')
        }
    },
        
       
    }










