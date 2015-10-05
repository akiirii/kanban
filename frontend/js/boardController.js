angular
    .module('board', [])
    .controller('boardController', ['$scope', '$routeParams', 'boardService', function($scope, $routeParams,
        boardService) {
        $scope.updateBoard = false;
        $scope.loading = true;
        $scope.createNewicket = false;

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
            if ($scope.updateBoard) {
                boardService.updateBoard(board).then(function(response) {
                    console.log('????')
                    $scope.updateBoard = false;
                });
            }

        }, true);


        $scope.validate = function(fieldName) {
            return $scope.newticket[fieldName].$invalid && ($scope.newticket[fieldName].$dirty ||
                $scope.submited)
        }

        $scope.addTicket = function() {
            $scope.submited = false;
            $scope.ticket = {
                name: '',
                description: '',
                stetus: 'requested'
            };
            $scope.createNewTicket = true;

        }
        $scope.close = function() {
            $scope.submited = false;

            $scope.createNewTicket = false;
        }
        $scope.submit = function() {
            $scope.submited = true;
            if ($scope.newticket.$valid) {
                $scope.board.tickets.push($scope.ticket);
                $scope.createNewTicket = false;
            }
        }
    }]);
