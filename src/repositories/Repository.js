const fs = require('fs')

class Repository {
    file;

    read() {
        let content = fs.readFileSync(this.file)
        return JSON.parse(content)
    }

    findById(id) {
        let content = this.read()
        return content.find((obj) => obj.id == id)
    }

    findByEmail(email) {
        let content = this.read()
        return content.find((obj) => obj.email == email)
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

module.exports = Repository