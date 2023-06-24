//Importe de libreria
const nodemailer = require('nodemailer');
const DataMail = require('../models/DataMail')
dataMail = new DataMail;
require('dotenv').config();

function enviarCorreo(mail, texto) {

    //Probar con el codigo nuevo
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(mail)) {
      console.log('El correo electrónico proporcionado no tiene una estructura válida.');
    return;
    }

    if (texto === null || texto.trim() === '') {
      console.log('El texto a enviar no puede estar vacío o ser null.');
      return;
    }

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 587,
        auth: {
            user: dataMail.getSalida(),
            pass: dataMail.getPass()
        }
      });


      const mailOptions = {
        from: dataMail.getSalida(), 
        to: mail, 
        subject: 'Asunto del correo',
        text: texto
      };

      transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log('Correo enviado: ' + info.response);
        }
      });

}

module.exports = enviarCorreo;