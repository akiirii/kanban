angular
    .module('board.ticket', [])
    .directive('ticket', function() {
        return {
            restrict: 'A',
            templateUrl: '/html/ticket.html',
            controller: ['$scope', function($scope) {



            }]
        }
    })
