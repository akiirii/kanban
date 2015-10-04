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

            }]
        }
    })
