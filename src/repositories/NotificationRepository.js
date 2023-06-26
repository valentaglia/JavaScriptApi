const Repository = require('./Repository');
const fs = require('fs');

class NotificationRepository extends Repository {

  file = 'notifications.json';

  getNotifications() {
    return this.read();
  }

  readNotification(id) {
    const today = new Date();

    // obtengo la lista de objetos de notifications.json
    const notificationList = this.read();
    const indice = notificationList.findIndex((objeto) => {
      return objeto.id === id;
    });
    
    if (indice != null) {
      notificationList[indice].readDate = today.toISOString();

      fs.writeFileSync(this.file, JSON.stringify(notificationList));
      return true;
    }
    else {
      console.log("NO EXISTE LA NOTIFICACIÓN");
      return false;
    }
  }

  update(data) {
    // obtengo la lista de objetos de notifications.json
    const notificationList = this.read();
    const indice = notificationList.findIndex((objeto) => {
      return objeto.id === data.id;
    });
    
    if (indice != null) {
      notificationList[indice].key = (data.key != null) ? data.key : notificationList[indice].key;
      notificationList[indice].text = (data.text != null) ? data.text : notificationList[indice].text;
      notificationList[indice].sendDate = (data.sendDate != null) ? data.sendDate : notificationList[indice].sendDate;
      notificationList[indice].readDate = (data.readDate != null) ? data.readDate : notificationList[indice].readDate;

      fs.writeFileSync(this.file, JSON.stringify(notificationList));
      return true;
    }
    else {
      console.log("NO EXISTE LA NOTIFICACIÓN A MODIFICAR");
      return false;
    }
  }

  deleteById(id) {
    // obtengo la lista de objetos de notifications.json
    const notificationList = this.read();
    const indice = notificationList.findIndex((objeto) => {
      return objeto.id === id;
    });

    if (indice != null) {
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