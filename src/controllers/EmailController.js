const EmailModel = require('../models/Email');

class EmailController {
  sendEmail(to, subject, message) {
    const email = new EmailModel(to, subject, message);
    email.sendEmail();
  }
}

module.exports = EmailController;
