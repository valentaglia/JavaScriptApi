require('dotenv').config();
const EmailFactory = require('./controllers/EmailController');


try{

    const email = new EmailFactory();

//Recibe tres parametros(destinatario, asunto del correo, contenido del correo electrónico. )
    email.sendEmail('testort2023@gmail.com', 'Prueba final sin middleware', 'Este es el contenido del correo electrónico.');

}
catch(error){
    console.error('Error al enviar el correo electrónico:', error);
}