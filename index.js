const App = require('./src/App');

// Crear una instancia de la aplicación
const app = new App();

// Registrar un usuario
try {
    const result = app.registrar('user@example.com', 'password');
    console.log(result)
} catch (e) {
    console.log(e.message)
}
