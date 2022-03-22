const express = require('express')
require('./database')
const saveRouter = require('./routes/saveRouter')
const insertRouter = require('./routes/insertRouter')

const app = express()

app.use(express.json({ limit: '100kb' }));
app.use('/api/save', saveRouter)
app.use('/api/insert', insertRouter)

module.exports = app