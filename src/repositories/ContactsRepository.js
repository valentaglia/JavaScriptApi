const fs = require("fs");
class ContactRepository {
  file = "D:/ORT/2do año Primer Cuatrimestre/TP2/ProyectoTP2/ORT-2023-1/src/repositories/contacts.json";

  read() {
    let content = fs.readFileSync(this.file);
    return JSON.parse(content);
  }

  findByEmail(email) {
    let contacts = this.read();
    return contacts.find((contact) => contact.email === email);
  }

  save(data) {
    let content = this.read()

    data.id = Date.now()

    content.push(data)

    content = JSON.stringify(content)

    fs.writeFileSync(this.file, content)

    return true;
}
}
module.exports = ContactRepository;
