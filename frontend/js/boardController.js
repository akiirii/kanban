angular
    .module('board', [])
    .controller('boardController', ['$scope', function($scope) {

        board = {
            id: 123,
            name: 'sssss',
            tickets: [{
                id: 12,
                name: 'nasfdfnsma',
                status: 'requested',
                description: 'asdadadasd '
            }, {
                id: 2,
                name: 'dsfsd',
                status: 'requested',
                description: 'sdf dsdsf sdf sd'
            }, {
                id: 3,
                name: 'as',
                status: 'inprogress',
                description: 'sdfsdf dsfsdf requested'
            }, {
                id: 4,
                name: 'sad',
                status: 'requested',
                description: ''
            }, {
                id: 5,
                name: 'asd',
                status: 'testing',
                description: 'asdasdd'
            }, {
                id: 6,
                name: 'asd',
                status: 'done'
            }, {
                id: 7,
                name: 'sdfdfsdf',
                status: 'testing'
            }]
        };
        $scope.board = {
            name: board.name,
            id: board.id
        }
        angular.forEach(board.tickets, function(ticket, key) {
            if (!$scope.board[ticket.status])
                $scope.board[ticket.status] = [];
            $scope.board[ticket.status].push(ticket)
        }, true);

        $scope.$watch('board', function(board) {
            console.log('cange', board);
        });
    }]);
