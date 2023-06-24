const EmailFactory = require('../factories/EmailFactory');

class emailService {
  sendEmail(to, subject, message) {
    const email = new EmailFactory();
    email.sendEmail(to, subject, message);
  }
}

module.exports = emailService;
