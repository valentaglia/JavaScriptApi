
const Repository = require("./Repository");
const Factory = require('../factories/UserFactory')
class ContactRepository extends Repository{
  file = "./src/contacts.json";

  findByEmail(email) {
    let contacts = this.read();
    let contact = contacts.find((contact) => contact.email === email);
    return Factory.make(contact);
  }

}
module.exports = ContactRepository;
