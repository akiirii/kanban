var db = require('./db');
var _ = require('underscore');

module.exports = {
    getBoards: function(req, res) {
        var collection = db.collection('boards');

        res.send({
            boards: _(collection.items).each(function(b) {
                b.id = b.cid;
            })
        });
    },
    getBoard: function(req, res) {
        var boardCollection = db.collection('boards');
        var ticketCollection = db.collection('ticket');

        var id = parseInt(req.params.boardId);
        var board = boardCollection.get(id);

        if (board) {

            var tickets = _(ticketCollection.where({
                boardId: id
            }).items).each(function(t) {
                t.id = t.cid;
            });

            res.send({
                id: id,
                name: board.name,
                tickets: tickets
            });
        } else {
            res.sendStatus(404);
        }
    },
    createBoard: function(req, res) {
        var collection = db.collection('boards');
        var board = req.body;

        collection.insert(board);
        collection.save();
        res.send({
            id: board.cid
        });

    }
}
