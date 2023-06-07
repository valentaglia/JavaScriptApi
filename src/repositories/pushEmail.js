//Importe de libreria
const nodemailer = require('nodemailer');

const dotenv = require('dotenv');
dotenv.config();


    const transporter = nodemailer.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 587,
        auth: {
            user: 'testort2023@gmail.com',
            pass: process.env.PASSWORD
        }
      });


      const mailOptions = {
        from:"testort2023@gmail.com", 
        to:"testort2023@gmail.com", 
        subject: 'Asunto del correo',
        text: 'Correo enviado con la password guardada en otra clase'
      };

      transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log('Correo enviado: ' + info.response);
        }
      });
    
   /* transporter.sendMail(message, (error, info) => {
        if (error){
            console.log(error);
            res.send(500, err.message);
        } else {
            console.log("Email sent");
            res.status(200).jsonp(req.body);
        }
    })
*/


