const App = require('./src/App');

// Crear una instancia de la aplicación
const app = new App();

// Registrar un usuario
app.registrar('user@example.com', 'password');

// Iniciar sesión del usuario
app.login('user@example.com', 'password');

// Enviar un mensaje
const mensaje = 'Hola @profesor tengo una consulta';
app.sendMessage(mensaje);