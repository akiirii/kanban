angular
    .module('board.service', [])
    .factory('boardService', ['$http', function($http) {
        return {
            getBoards: function() {
                return $http.get('/api/boards').then(function(response) {
                    return response.data.boards;
                });
            },

            getBoard: function(id) {
                return $http.get('/api/board/' + id).then(function(response) {
                    return response.data;
                })
            },

            updateBoard: function(board) {
                console.log('sadads')
                return $http.post('/api/updateBoard/', board).then(function(response) {
                    return response.data;
                })
            },

            createBoard: function(board) {
                return $http.post('/api/createBoard/', board).then(function(response) {
                    return response.data;
                })
            }


        }

    }]);
