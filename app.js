// Archivo: app.js
const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const mentionsRoutes = require('./routes/mentionsRouter');
const rolesRouter = require('./routes/rolesRouter');
const storeRouter = require('./routes/storeRouter');
const cartRouter = require('./routes/cartRouter');


app.use(bodyParser.json());
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
app.use(bodyParser.json({}))
require('dotenv').config();

