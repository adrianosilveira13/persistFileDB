const app = require('./app')

const port = process.env.PORT || 5050
app.listen(process.env.PORT, (req, res) => {
  console.log('App running')
})