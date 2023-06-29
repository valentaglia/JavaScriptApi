const MeetingRepository = require('../repositories/MeetingRepository');
const meetingModel = require('../models/Meeting');

class MeetingController {
    constructor() {
        this.repo = new MeetingRepository
        this.meetingModel = meetingModel
    }

    generateLink = (req, res) => {
        try {
            let linkMeeting = this.meetingModel.generateLink()
            res.json(linkMeeting)
        } catch (e) {
            res.json({error: e.message})
        }
    }

    index = (req, res) => {
        try {
            let meetings = this.repo.all()
            res.json(meetings)
        } catch (e) {
            res.json({error: e.message})
        }
    }

    show = (req, res) => {
        try {
            let meeting = this.repo.byId(req.params.id)
            res.json(meeting)
        } catch (e) {
            res.json({error: e.message})
        }
    }

    create = (req, res) => {
        try {
            // @todo la validacion se hace en un middleware
            if (req.body.date && req.body.time && req.body.duration) {
                this.repo.save({
                    date: req.body.name,
                    time: req.body.time,
                    duration: req.body.duration
                })

                res.status(201).json({})
            }
        } catch (e) {
            res.json({error: e.message})
        }
    }

    invitarGuest = (req, res) => {
        const id = req.params.id;
        const guest = req.body.guests;

        try {
            const updatedMeet = this.repo.addGuest(id, guest);
            res.json(updatedMeet);
        } catch (error) {
            res.json({error: error.message});
        }
    }

    update = (req, res) => {
    }

    delete = (req, res) => {
    }
}

module.exports = MeetingController
