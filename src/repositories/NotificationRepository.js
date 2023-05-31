class NotificationRepository extends Repository {

  file = './notifications.json';

  save(notification) {
    super.save(notification);
  }
}

  module.exports = NotificationRepository