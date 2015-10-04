angular
    .module('main', [])
    .controller('mainController', ['$scope', function($scope) {

        $scope.boards = [{
            id: 122,
            name: 'board1',
            description: 'asasas',
            count: 12
        }, {
            id: 12121,
            name: 'board  sbbsd sadgshdgs sdasdadd',
            description: '',
            count: 1
        }]

    }]);
