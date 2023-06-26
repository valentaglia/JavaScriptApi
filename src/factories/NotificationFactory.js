const Notification = require('../models/Notification')

class NotificationFactory {
    static make(obj) {
        let notif = new Notification
        notif.setKey(obj.key)
        notif.setText(obj.text)
        notif.setSendDate(obj.sendDate)
        notif.setReadDate(obj.readDate)
        return notif
    }
}

module.exports = NotificationFactory