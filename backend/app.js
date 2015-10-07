var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');


var boardService = require('./boardService');
var ticketService = require('./ticketService');

var app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());


app.get('/api/boards', boardService.getBoards);

app.get('/api/boards/:boardId', boardService.getBoard);

app.post('/api/boards', boardService.createBoard);

app.post('/api/boards/:boardId/tickets', ticketService.createTicket);

app.put('/api/boards/:boardId/tickets/:ticketId', ticketService.updateTicket);

app.use('/js', express.static(__dirname + '/../tmp/js'));
app.use('/css', express.static(__dirname + '/../tmp/css'));
app.use('/static', express.static(__dirname + '/../bower_components'));
app.use('/html', express.static(__dirname + '/../frontend/html'))
app.use('/img', express.static(__dirname + '/../frontend/img'))
app.use('/', express.static(__dirname + '/../frontend/html'))

module.exports = app;
