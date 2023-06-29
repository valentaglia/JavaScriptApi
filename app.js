const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.json({}))
require('dotenv').config();

const rolesRouter = require('./routes/rolesRouter')
const multimediaRouter = require('./routes/MultimediaRouter')
const storeRouter = require('./routes/storeRouter')
const cartRouter = require('./routes/cartRouter')
const emailRouter = require('./routes/emailRouter')
const notificationsRouter = require('./routes/notificationsRouter')
const mentionsRoutes = require('./routes/mentionsRouter');
const meetRouter = require('./routes/meetRouter')
const meetingRouter = require('./routes/meetingRouter')
const eventsRouter = require("./routes/getEventsRouter");
const productsRouter = require('./routes/productsRouter.js')
const metadataRouter = require('./routes/metadataRouter')
const categoryRouter = require('./routes/categoryRouter')

app.use('/roles', rolesRouter)
app.use('/meetings', meetingRouter)
app.use('/metadata', metadataRouter)
app.use('/multimedia', multimediaRouter);
app.use('/stores', storeRouter)
app.use('/carts', cartRouter)
app.use('/email', emailRouter)
app.use('/notifications', notificationsRouter)
app.use('/mentions', mentionsRoutes);
app.use('/meet', meetRouter)
app.use('/events', eventsRouter)
app.use('/files', multimediaRouter);
app.use('/stores', storeRouter)
app.use('/carts', cartRouter)
app.use('/products', productsRouter)
app.use('/categories', categoryRouter)

app.get('/', function (req, res) {
    res.send('Bienvenido a la app')
})

app.listen(3001, function () {
    console.log('http://localhost:3001/')
})