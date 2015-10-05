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
            }
        }

    }]);
