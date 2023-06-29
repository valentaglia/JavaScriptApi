const Repository = require('./Repository');
const fs = require('fs');

class NotificationRepository extends Repository {

  file = 'examples/notifications.json';

  getNotifications() {
    return this.read();
  }

  update(data) {
    // obtengo la lista de objetos de notifications.json
    const notificationList = this.read();
    const indice = notificationList.findIndex((objeto) => {
      return objeto.id === parseInt(data.id);
    });

    if (indice != -1) {
      if (data.key != null) {
        notificationList[indice].key = data.key;
      }

      if (data.text != null) {
        notificationList[indice].text = data.text;
      }

      if (data.sendDate != null) {
        notificationList[indice].sendDate = data.sendDate;
      }

      if (data.readDate != null) {
        notificationList[indice].readDate = data.readDate;
      }

      fs.writeFileSync(this.file, JSON.stringify(notificationList));
      return true;
    }
    else {
      return false;
    }
  }

  deleteById(id) {
    // obtengo la lista de objetos de notifications.json
    const notificationList = this.read();
    const indice = notificationList.findIndex((objeto) => {
      return objeto.id === parseInt(id);
    });

    if (indice != -1) {
      notificationList.splice(indice, 1); // Elimina 1 elemento a partir del índice dado

      fs.writeFileSync(this.file, JSON.stringify(notificationList));
      return true;
    }
    else {
      console.log("No se encontró la notificación a eliminar")
      return false;
    }
  }

  deleteAll() {
    const notificationList = [];
    fs.writeFileSync(this.file, JSON.stringify(notificationList));
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