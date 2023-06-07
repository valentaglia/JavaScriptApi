const NotificationFactory = require('./factories/NotificationFactory')
const NotificationRepository = require('./repositories/NotificationRepository')

class AppNotification {

    saveNotification(data) {
        // construyo el objeto notification
        const notification = NotificationFactory.make(data)
        
        // guardarlo en la base de datos = Repository
        const repo = new NotificationRepository
        repo.create(notification)

        // devolver la instancia de la notificación guardada
        return notification
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