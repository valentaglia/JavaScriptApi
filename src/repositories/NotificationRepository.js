const User = require('../models/Notification')
const Factory = require('../factories/NotificationFactory')
const Repository = require('./Repository');
const Notification = require('../models/Notification');

class NotificationRepository extends Repository {

  file = './notifications.json';

  create(notification) {
    super.save({
      key : notification.getKey(),
      text : notification.getText(),
      sendDate : notification.getSendDate(),
      readDate : notification.getReadDate()
    })
  }

  byId(id) {
    if (isNaN(id)) {
      throw new Error('Se esperaba id numérico')
    }

    let notif = this.findById(id)

    if (notif === undefined) {
        throw new Error('La notificación no se encontró')
    }

    return notif;
  }
}

  module.exports = NotificationRepository