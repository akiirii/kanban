angular
    .module('board.column', [])
    .directive('boardColumn', function() {
        return {
            restrict: 'A',
            replace: true,
            scope: {
                name: '@name',
                status: '@status',
                header: '@header',
                tickets: '=tickets',
                error: '=error',

            },
            templateUrl: '/html/boardColumn.html',
            controller: ['$scope', '$routeParams', 'boardService', function($scope, $routeParams, boardService) {
                $scope.removeElement = function(ticket, index) {
                    $scope.tickets.splice(index, 1)
                };

                $scope.changeStatus = function(item, status) {
                    $scope.error = false;
                    item.status = status;
                    boardService.updateTicketStatus($routeParams.id, item).then(function() {}, function() {
                        $scope.error = true;
                    });
                }
            }]
        }
    })
