angular
    .module('main', [])
    .controller('mainController', ['$scope', function($scope) {

        $scope.boards = [{
            id: 122,
            name: 'board1',
            description: 'asasas'
        }, {
            id: 12121,
            name: 'board2',
            description: ''
        }]

    }]);
