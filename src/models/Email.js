class EmailModel {

  constructor(to, subject, message) {
    this.to = to;
    this.subject = subject;
    this.message = message;
  }
  
  sendEmail() {
    const nodemailer = require('nodemailer');
    
    // Configuración del transporte SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      auth: {
        user: process.env.FROM_ADDRESS,
        pass: process.env.PASSWORD
      }
    });
    
    // Opciones del correo electrónico
    const mailOptions = {
      from: 'tudireccion@example.com',
      to: this.to,
      subject: this.subject,
      text: this.message
    };
    
    // Envío del correo electrónico
    //Probar con try cacth
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error al enviar el correo:', error);
        throw error;
      } else {
        console.log('Correo electrónico enviado:', info.response);
      }
    });


    
  }
}

module.exports = EmailModel;