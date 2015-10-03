var express = require('express');
var morgan = require('morgan')

var app = express();
app.use(morgan('combined'))

console.log(__dirname + '../frontend/html');

app.use('/js', express.static(__dirname + '/../tmp/js'));
app.use('/css', express.static(__dirname + '/../tmp/css'));
app.use('/static', express.static(__dirname + '/../bower_components'));
app.use('/html', express.static(__dirname + '/../frontend/html'))
app.use('/', express.static(__dirname + '/../frontend/html'))

module.exports = app;
