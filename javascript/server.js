const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello Cypress Discovery')
})

app.listen(3000)