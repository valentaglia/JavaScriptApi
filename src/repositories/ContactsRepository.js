const fs = require("fs");
class ContactRepository {
  file = "./contacts.json";

  read() {
    let content = fs.readFileSync(this.file);
    return JSON.parse(content);
  }

  findByEmail(email) {
    let contacts = this.read();
    return contacts.find((contact) => contact.email === email);
  }
}
module.exports = ContactRepository;
