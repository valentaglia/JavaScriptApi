class EmailModel {

  constructor(to, subject, message) {
    this.to = to;
    this.subject = subject;
    this.message = message;
  }
  
  sendEmail() {
    const nodemailer = require('nodemailer');
    

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      auth: {
        user: process.env.FROM_ADDRESS,
        pass: process.env.PASSWORD
      }
    });
    

    const mailOptions = {
      from: process.env.FROM_ADDRESS,
      to: this.to,
      subject: this.subject,
      text: this.message
    };
    

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error al enviar el correo:', error);

      } else {
        console.log('Correo electrónico enviado:', info.response);
      }
    });


    
  }
}

module.exports = EmailModel;