const {crearMeeting} = require("../AppTp")
const MeetRepository = require("../repositories/MeetRepository")


class MeetController {
    constructor() {
        this.repo = new MeetRepository()
    }
    index = (req, res) => {
        res.json(this.repo.read())
    }
    show = (req, res) => {
        let meet = this.repo.findById(req.params.id)
        if (meet !== null && meet !== undefined) {
            res.status(200).json(meet)
        } else {
            res.status(404).end("Meet_No_Encontrado")
        }
    }
    create = (req, res) => {
    
        try {
           
            crearMeeting(req.body)
            res.status(201).end("Created")
        } catch (e) {
            res.status(400).end(e.message)
        }
    }
    update = (req, res) => {

    }
    delete = (req, res) => {
        
    }
}
module.exports = MeetController