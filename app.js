// require in modules

// external modules
var bodyParser = require('body-parser');
var express = require('express');
var jade = require('jade');

// my modules

var app = express();

app.get('/', function (req, res) {
  res.send('yoyoyo');
});

var server = app.listen(3000, function () {
  var port = server.address().port;
  console.log('Listening on port ', port);
});