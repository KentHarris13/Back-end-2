const express = require('express')
const cors = require('cors')
const { getHouses } = require('./controller')

const app = express()

app.use(express.json())
app.use(cors())

const ctrl = require('./controller')

app.get('/api/houses', ctrl.getHouses)
app.post('/api/houses', ctrl.createHouses)
app.put('/api/houses/:id', ctrl.updateHouses)
app.delete('/api/houses/:id', ctrl.deleteHouses)

app.listen(4004, () => console.log('Yeet is running on 4004'))