var express = require('express')
var app = express()
const PORT = 3000

app.get('/', function (req, res) {
  res.send('hello world')
})

app.listen(PORT)
