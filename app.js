// Archivo: app.js

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());

const rolesRouter = require('./routes/rolesRouter');
const storeRouter = require('./routes/storeRouter');
const cartRouter = require('./routes/cartRouter');
const mentionsRoutes = require('./routes/mentionsRouter');

app.use('/roles', rolesRouter);
// ... agregar rutas que faltan
app.use('/stores', storeRouter);
app.use('/carts', cartRouter);
app.use('/mentions', mentionsRoutes);

app.get('/', function (req, res) {
    res.send('Bienvenido a la app');
});

app.listen(3001, function () {
    console.log('http://localhost:3001/');
});
