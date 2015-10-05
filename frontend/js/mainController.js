angular
    .module('main', [])
    .controller('mainController', ['$scope', 'boardService', function($scope, boardService) {

        $scope.loading = true;

        boardService.getBoards().then(function(response) {
            $scope.boards = response;
            $scope.loading = false;
        })

        $scope.addBoard = function() {
            $scope.submited = false;
            $scope.board = {
                name: '',
                description: ''
            };
            $scope.createNewBoard = true;
        }
        $scope.close = function() {
            $scope.submited = false;
            $scope.createNewBoard = false;
        }

        $scope.submit = function() {
            $scope.submited = true;
            if ($scope.newboard.$valid) {
                console.log('correct');
                $scope.createNewBoard = false;
            }
        }
        $scope.validate = function() {
            return $scope.newboard.boardName.$invalid && (!$scope.newboard.boardName.$pristine ||
                $scope.submited)
        }

    }]);
