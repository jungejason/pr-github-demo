var express = require('express')
var app = express()

// define a variable for the port

app.get('/', function (req, res) {
  res.send('hello world')
})

// change the port number here to be a variable
app.listen(3000)
