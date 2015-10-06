angular
    .module('board.service', [])
    .factory('boardService', ['$http', function($http) {
        return {
            getBoards: function() {
                return $http.get('/api/boards').then(function(response) {
                    return response.data.boards;
                });
            },
            createBoard: function(board) {
                return $http.post('/api/boards/', board).then(function(response) {
                    return response.data;
                })
            },
            getBoard: function(boardId) {
                return $http.get('/api/boards/' + boardId).then(function(response) {
                    return response.data;
                })
            },
            createTicket: function(boardId, ticket) {
                console.log('createTicket')
                return $http.post('/api/boards/' + boardId + '/tickets', ticket).then(function(response) {
                    return response.data;
                })
            },
            updateTicketStatus: function(boardId, ticket) {
                console.log('updateTicketStatus')
                return $http.post('/api/boards/' + boardId + '/tickets/' + ticket.id, ticket).then(
                    function(response) {
                        return response.data;
                    })
            }
        }
    }]);
