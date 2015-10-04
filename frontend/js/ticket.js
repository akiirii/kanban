angular
    .module('board.ticket', [])
    .directive('boardTicket', function() {
        return {
            restrict: 'A',
            scope: {
                ticket: '=ticket'
            },
            templateUrl: '/html/ticket.html',
            controller: ['$scope', function($scope) {
                $scope.ticket.$editing = ''

                $scope.editContent = function(element) {

                    $scope.ticket.$editing = element;
                };
                $scope.save = function() {
                    $scope.ticket.$editing = '';

                };

            }]
        }
    })
