const Meet = require('../models/Meet')
const Repository = require('./Repository')

class MeetRepository extends Repository {
    file = './meets.json'

    create(meet) {
        if (meet instanceof Meet) {
            this.save({
                date: meet.getDate(),
                time: meet.getTime(),
                duration: meet.getDuration(),
            })

            return;
        }

        throw new Error('Se requiere una instancia de Meet')
    }

}