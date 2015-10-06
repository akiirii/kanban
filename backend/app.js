var express = require('express');
var morgan = require('morgan')

var app = express();
app.use(morgan('combined'))

app.get('/api/boards', function(req, res) {
    res.send({
        boards: [{
            id: 122,
            name: 'board1',
            description: 'asasas',
            count: 12
        }, {
            id: 12121,
            name: 'board  sbbsd sadgshdgs sdasdadd',
            description: '',
            count: 1
        }]
    });
});

app.get('/api/boards/:boarsdId', function(req, res) {
    res.send({
        id: 122,
        name: 'board1',
        tickets: [{
            id: 12,
            name: 'nasfdfnsma',
            status: 'requested',
            description: 'asdadadasd '
        }, {
            id: 2,
            name: 'dsfsd',
            status: 'requested',
            description: 'sdf dsdsf sdf sd'
        }, {
            id: 3,
            name: 'as',
            status: 'inprogress',
            description: 'sdfsdf dsfsdf requested'
        }, {
            id: 4,
            name: 'sad',
            status: 'requested',
            description: ''
        }, {
            id: 5,
            name: 'asd',
            status: 'testing',
            description: 'asdasdd'
        }, {
            id: 6,
            name: 'asd',
            status: 'done'
        }, {
            id: 7,
            name: 'sdfdfsdf',
            status: 'testing'
        }]
    });
});

app.post('/api/boards', function(req, res) {
    res.send({
        id: 1223
    });
});

app.post('/api/boards/:boarsdId/tickets', function(req, res) {
    res.send({
        id: 1223
    });
});

app.put('/api/boards/:boardId/tickets/:ticketId', function(req, res) {
    res.sendStatus(200);
});

app.use('/js', express.static(__dirname + '/../tmp/js'));
app.use('/css', express.static(__dirname + '/../tmp/css'));
app.use('/static', express.static(__dirname + '/../bower_components'));
app.use('/html', express.static(__dirname + '/../frontend/html'))
app.use('/img', express.static(__dirname + '/../frontend/img'))
app.use('/', express.static(__dirname + '/../frontend/html'))

module.exports = app;
