angular
    .module('board', [])
    .controller('boardController', ['$scope', '$routeParams', 'boardService',
        function($scope, $routeParams, boardService) {

            $scope.error = false;
            $scope.loading = true;
            $scope.createNewicket = false;

            boardService.getBoard($routeParams.id).then(function(response) {
                $scope.board = {
                    name: response.name,
                    id: response.id,
                    requested: [],
                    inprogress: [],
                    testing: [],
                    done: []
                }

                angular.forEach(response.tickets, function(ticket, key) {
                    $scope.board[ticket.status].push(ticket);
                }, true);

                $scope.loading = false;
            });

            $scope.validate = function(fieldName) {
                return $scope.newticket[fieldName].$invalid && $scope.submited
            }

            $scope.addTicket = function() {
                $scope.submited = false;
                $scope.ticket = {
                    name: '',
                    description: '',
                    status: 'requested'
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
                    $scope.board['requested'].push($scope.ticket);
                    $scope.createNewTicket = false;
                    $scope.submited = false;
                    boardService.createTicket($routeParams.id, $scope.ticket).then(function() {
                        console.log('aaaaa')
                    })
                }
            }
        }
    ]);
