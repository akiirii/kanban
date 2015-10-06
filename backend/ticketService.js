var db = require('./db');
var uuid = require('node-uuid');


module.exports = {
    createTicket: function(req, res) {
        var boardCollection = db.collection('boards');
        var ticketCollection = db.collection('ticket');

        var id = parseInt(req.params.boardId);
        var board = boardCollection.get(id);

        if (board) {
            var ticket = req.body;
            ticket.boardId = board.cid;
            ticketCollection.insert(ticket);
            ticketCollection.save();

            res.send({
                id: ticket.cid
            });
        } else {
            res.sendStatus(404);
        };
    },

    updateTicket: function(req, res) {

        var ticketCollection = db.collection('ticket');

        var id = parseInt(req.params.ticketId);
        var ticket = ticketCollection.get(id);

        console.log(req.params)

        if (ticket) {
            ticket.name = req.body.name;
            ticket.status = req.body.status;
            ticket.description = req.body.description;

            ticketCollection.save();

            res.sendStatus(200);
        } else {
            res.sendStatus(409);
        };
    }
}
