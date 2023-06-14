const express = require('express')
const app = express()
var bodyParser = require('body-parser')
app.use(bodyParser.json({}))

const rolesRouter = require('./routes/rolesRouter')



app.use('/roles', rolesRouter)
// ... agregar rutas que faltan


const mentionsRoutes = require('./routes/mentionsRouter');
app.use('/mentions', mentionsRoutes); 


app.get('/', function (req, res) {
    res.send('Bienvenido a la app')
})
app.listen(3001, function () {
    console.log('http://localhost:3001/')
})



