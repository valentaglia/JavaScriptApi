const fs = require("fs");
const Repository = require("./Repository");
class ContactRepository extends Repository{
  file = "./contacts.json";

  findByEmail(email) {
    let contacts = this.read();
    return contacts.find((contact) => contact.email === email);
  }

}
module.exports = ContactRepository;
