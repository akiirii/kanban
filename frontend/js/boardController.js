angular
    .module('board', [])
    .controller('boardController', ['$scope', '$routeParams', 'boardService', function($scope, $routeParams,
        boardService) {

        $scope.loading = true;
        boardService.getBoard($routeParams.id).then(function(response) {
            $scope.board = {
                name: response.name,
                id: response.id
            }

            angular.forEach(response.tickets, function(ticket, key) {
                if (!$scope.board[ticket.status]) {
                    $scope.board[ticket.status] = [];
                }

                $scope.board[ticket.status].push(ticket)
            }, true);

            $scope.loading = false;
        });


        $scope.$watch('board', function(board) {
            console.log('cange', board);
        });

        $scope.addTicket = function() {
            $scope.newTicket = true;
        }
        $scope.close = function() {
            $scope.newTicket = false;
        }
    }]);
