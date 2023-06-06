const User = require('../models/Notification')
const Factory = require('../factories/NotificationFactory')
const Repository = require('./Repository');

class NotificationRepository extends Repository {

  file = './notifications.json';

  create(notification) {
    super.save(notification)
  }

  byId(id) {
    if (isNaN(id)) {
      throw new Error('Se esperaba id numérico')
    }

    let notif = this.findById(id)

    if (notif === undefined) {
        throw new Error('La notificación no se encontró')
    }

    return Factory.make(notif)
  }
}

  module.exports = NotificationRepository