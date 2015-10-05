angular
    .module('main', [])
    .controller('mainController', ['$scope', 'boardService', function($scope, boardService) {

        $scope.loading = true;

        boardService.getBoards().then(function(response) {
            $scope.boards = response;
            $scope.loading = false;
        })


    }]);
