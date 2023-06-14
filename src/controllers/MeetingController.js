const MeetRepository = require('../repositories/MeetRepository')

class MeetingController {
    constructor() {
        this.repo = new MeetRepository
    }

    index = (req, res) => {
        let meets = this.repo.all()
    
        res.json(meets)
    }

    // show = (req, res) => {
    //     try {
    //         let role = this.repo.findById(req.params.id)
    //         res.json(role)
    //     } catch (e) {
    //         res.json({error: e.message})
    //     }
    // }

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
        const guest = req.body.guest;
        try {
            const updatedMeet = this.repo.addGuest(id, guest);
            res.json(updatedMeet);
        } catch (error) {
            res.json({ error: error.message });
        }
    }
    
    // update = (req, res) => {}
    
    // delete = (req, res) => {}
}

module.exports = MeetingController
