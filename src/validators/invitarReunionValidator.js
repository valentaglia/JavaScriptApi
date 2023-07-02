module.exports = {
    guestNotEmpty(value){
        if(value.length === 0){
            throw new Error('GUEST_IS_EMPTY');
        }
    },
    
    nameLength(value){
        if(value.length > 10){
           throw new Error('GUEST_TOO_LONG');
        }
    }

    
}