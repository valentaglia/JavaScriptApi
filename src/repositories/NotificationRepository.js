const Notification = require('../models/Notification')
const Factory = require('../factories/NotificationFactory')
const Repository = require('./Repository')

class NotificationRepository extends Repository {

  file = './notifications.json';

  save(notification) {
    // Aquí puedes implementar la lógica para guardar la notificación en la base de datos u otro sistema de almacenamiento.
    // Por ejemplo, si estás usando una base de datos, puedes realizar una inserción en la tabla correspondiente.
    
    super.save(notification);
  }

  markAsRead(notificationId) {
    // Aquí puedes implementar la lógica para marcar una notificación como leída.
  }

  getUnreadNotifications() {
    // Aquí puedes implementar la lógica para obtener todas las notificaciones no leídas.
  }
}

  module.exports = NotificationRepository