angular
    .module('board.ticket', [])
    .directive('boardTicket', function() {
        return {
            restrict: 'A',
            scope: {
                ticket: '=ticket'
            },
            templateUrl: '/html/ticket.html',
            controller: ['$scope', '$routeParams', 'boardService', function($scope, $routeParams, boardService) {
                $scope.ticket.$editing = null;

                $scope.editContent = function(element) {
                    $scope.ticket.$editing = element;
                };
                $scope.save = function() {
                    $scope.ticket.$editing = null;
                    boardService.updateTicketStatus($routeParams.id, $scope.ticket).then(function(
                        response) {
                        console.log('aaaaa')
                    });
                };

            }]
        }
    })
