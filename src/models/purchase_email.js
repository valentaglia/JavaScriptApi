class purchase_email {

    buildMessage() {
        return `De: '<%= de %>',
        Para: '<%= para %>',
        Asunto: '<%= asunto %>',
      
        Mensaje: '<%= cuerpo %>'`
    }

}

module.exports = purchase_email