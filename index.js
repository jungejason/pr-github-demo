var express = require('express')
var app = express()
const PORT = 3000

app.get('/', function (req, res) {
  res.send('hello world')
})

app.get('/timestamp', function (req, res) {
  res.send('' + Date.now())
})

app.listen(PORT)
