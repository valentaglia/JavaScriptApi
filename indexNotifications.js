// Importación de la clase App
//const App = require('./src/App')
const AppNotification = require('./src/AppNotification');
const NotificationRepository = require('./src/repositories/NotificationRepository');

// Instancia de la clase App
//const app = new App
const app = new AppNotification;
const repo = new NotificationRepository;

try { 
    const result = app.saveNotification({
        key: "Test 1",
        text: "Test 1",
        sendDate: "Test 1",
        readDate: "Test 1"
    })
    console.log(result);
} catch (e) {
    console.log(e.message);
}

try {
    console.log("START!")
    const result = repo.readNotification("123");
    console.log("pasó el readNotification")
    console.log(result);
} catch (e) {
    console.log(e.message);
}

