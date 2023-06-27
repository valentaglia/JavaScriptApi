const MeetRepository = require('../repositories/MeetRepository')

class MeetingController {
    constructor() {
        this.repo = new MeetRepository
    }

    index = (req, res) => {
        let meets = this.repo.all()
    
        res.json(meets)
    }


    create = (req, res) => {
        let meet = {
            date : req.body.date,
            time: req.body.time,
            duration: req.body.duration,
            guests: req.body.guests
        }

        // // guardo
        this.repo.save(meet);

        // // respondo
        res.status(201).json({})
    }
    invitarGuest = (req, res) => {
        const id = req.params.id;
        const guest = req.body.guests;
        try {
            const updatedMeet = this.repo.addGuest(id, guest);
            res.json(updatedMeet);
        } catch (error) {
            res.json({ error: error.message });
        }
    }

}

module.exports = MeetingController
