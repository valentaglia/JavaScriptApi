const express = require('express')
const app = express()
var bodyParser = require('body-parser')
app.use(bodyParser.json({}))

const rolesRouter = require('./routes/rolesRouter')
const storeRouter = require('./routes/storeRouter')
const cartRouter = require('./routes/cartRouter')
const meetRouter = require('./routes/meetRouter')

app.get('/', function (req, res) {
    res.send('Bienvenido a la app')
})

app.use('/roles', rolesRouter)
// ... agregar rutas que faltan
app.use('/stores',storeRouter)
app.use('/carts',cartRouter)
app.use('/meets',meetRouter)

app.listen(3001, function () {
    console.log('http://localhost:3001/')
})
