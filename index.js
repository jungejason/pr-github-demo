var express = require('express')
var app = express()
// define a const for the port

app.get('/', function (req, res) {
  res.send('hello world')
})

app.listen(3000) // <- change the number to be a const
