require('dotenv').config();
const emailService  = require('./services/SendEmail.js');


try{

    const email = new emailService();

//Recibe tres parametros(destinatario, asunto del correo, contenido del correo electrónico. )
    email.sendEmail('testort2023@gmail.com', 'Asunto del correo', 'Este es el contenido del correo electrónico.');

}
catch(error){
    console.error('Error al enviar el correo electrónico:', error);
}