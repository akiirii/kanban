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
                tickets: '=tickets'

            },
            templateUrl: '/html/boardColumn.html',
            controller: ['$scope', function($scope) {
                $scope.removeElement = function(ticket, index) {
                    $scope.tickets.splice(index, 1)
                }

                $scope.changeStatus = function(item, status) {
                    item.status = status;
                }
            }]
        }
    })
