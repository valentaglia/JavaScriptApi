const express = require('express')
const app = express()
var bodyParser = require('body-parser')
app.use(bodyParser.json({}))


const eventsRouter = require('../routes/getEventsRouter')

app.get('/', function (req, res) {
    res.send('Bienvenido a la app')
})

app.use('/events',eventsRouter)

app.listen(3001, function () {
    console.log('http://localhost:3001/')
})



