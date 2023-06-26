const NotificationFactory = require('./factories/NotificationFactory')
const NotificationRepository = require('./repositories/NotificationRepository')
const NotificationController = require('./controllers/NotificationController.js')

const controller = new NotificationController
class AppNotification {

    saveNotification(data) {
        controller.create(data)
        return true
    }


    readNotification(id, readDate) {
        const repo = new NotificationRepository

        // busca la notificación en el repo
        let notif = repo.byId(id)

        // si existe le setea el readDate en su #readDate
        notif.setReadDate(readDate)
    }
    
}

module.exports = AppNotification