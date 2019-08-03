const massive = require('massive')
const express = require('express')
const app = express()
app.use(express.json())
require('dotenv').config()
const ctrl = require('./controller')
const {SERVER_PORT, CONNECTION_STRING} = process.env


massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    app.listen(SERVER_PORT, () => console.log(`${SERVER_PORT} monkeys jumpin on a humvee`))
})

app.get('/api/houses', ctrl.getHouses)
app.post('/api/houses' , ctrl.addHouse)
app.delete('/api/houses/:id', ctrl.deleteHouse)