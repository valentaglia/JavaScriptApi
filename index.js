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

const mensaje1 = 'Hola @valen te puedo pedir algo?';
app.sendMessage(mensaje1);

const mensaje2 = 'Hola @director tengo un problema';
app.sendMessage(mensaje2);

/* 
try {
    const result = app.registrar('nuevo@example.com', 'nuevacontraseña');
    console.log(result);
} catch (e) {
    console.log(e.message);
} */



try {
    const result = app.registrar('user@example.com', 'password');
    console.log(result)
} catch (e) {
    console.log(e.message)
}

