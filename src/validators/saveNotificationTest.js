const NotificationRepository = require('../repositories/NotificationRepository');
const fs = require('fs');

// Crea una instancia de NotificationRepository
const notificationRepository = new NotificationRepository();

// Crea un objeto de notificación
const notification = {
  key: 'test',
  text: 'TEST {usuario} ha comprado {producto} TEST',
  date: '2023-05-17 00:19:35',
  read_at: null
};

// Guarda la notificación
notificationRepository.save(notification);

// Realiza una lectura del archivo para verificar
const content = fs.readFileSync(notificationRepository.file, 'utf8');
console.log(content);
