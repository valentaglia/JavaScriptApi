const { error } = require('console');
const fs = require('fs')
const sharp = require('sharp')

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
