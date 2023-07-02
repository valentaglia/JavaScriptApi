const MeetingRepository = require('../repositories/MeetingRepository');
const { ShortUniqueId } = require('short-unique-id');

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

        this.repo = new MeetingRepository();
        this.uid = new ShortUniqueId();
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
            const id = req.params.id;
            const meeting = this.repo.byId(id);
            if (!meeting) {
                res.json({ error: 'No se encontró Meeting con el id ingresado' });
                return;
            }
            res.json(meeting);
        } catch (e) {
            res.json({ error: e.message });
        }
    }

    create = (req, res) => {
        try {
            // @todo la validacion se hace en un middleware
            if (req.body.date && req.body.time && req.body.duration) {
                const meeting = {
                    id: this.uid.randomUUID(10),
                    date: req.body.date,
                    time: req.body.time,
                    duration: req.body.duration,
                    link: ''
                };
                this.repo.save(meeting);
                res.json(meeting);
            } else {
                res.json({ error: '' });
            }
        } catch (e) {
            res.json({ error: e.message });
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
        try {
            const id = req.params.id;
            const meeting = this.repo.byId(id);
            if (!meeting) {
                res.json({ error: 'No se encontró Meeting con el id ingresado' });
                return;
            }

            const link = this.uid.randomUUID(6);
            meeting.link = link;
            this.repo.save(meeting);
            res.send(link);
        } catch (e) {
            res.json({ error: e.message });
        }
    }

    delete = (req, res) => {
        try {
            const id = req.params.id;
            const deleted = this.repo.delete(id);
            if (!deleted) {
                res.json({ error: 'No se encontró Meeting con el id ingresado' });
                return;
            }
            res.send('Se eliminó la meeting exitosamente');
        } catch (e) {
            res.json({ error: e.message });
        }
    }
}

module.exports = MeetingController;
