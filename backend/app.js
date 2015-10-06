var express = require('express');
var morgan = require('morgan');

var boardService = require('./boardService');

var ticketService = require('./ticketService');

var app = express();
app.use(morgan('combined'))


app.get('/api/boards', function(req, res) {
    res.send(boardService.getBoards(req, res));
});

app.get('/api/boards/:boarsdId', function(req, res) {
    res.send(boardService.getBoard(req, res));
});

app.post('/api/boards', function(req, res) {
    res.send(boardService.createBoard(req, res));
});

app.post('/api/boards/:boarsdId/tickets', function(req, res) {
    res.send(ticketService.createTicket(req, res));
});

app.put('/api/boards/:boardId/tickets/:ticketId', function(req, res) {
    res.sendStatus(ticketService.updateTicket(req, res));
});

app.use('/js', express.static(__dirname + '/../tmp/js'));
app.use('/css', express.static(__dirname + '/../tmp/css'));
app.use('/static', express.static(__dirname + '/../bower_components'));
app.use('/html', express.static(__dirname + '/../frontend/html'))
app.use('/img', express.static(__dirname + '/../frontend/img'))
app.use('/', express.static(__dirname + '/../frontend/html'))

module.exports = app;
