angular
    .module('board', [])
    .controller('boardController', ['$scope', function($scope) {

        $scope.board = {
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
    }]);
