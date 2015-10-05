angular
    .module('main', [])
    .controller('mainController', ['$scope', 'boardService', function($scope, boardService) {

        $scope.loading = true;

        boardService.getBoards().then(function(response) {
            $scope.boards = response;
            $scope.loading = false;
        })

        $scope.addBoard = function() {
            $scope.board = {
                name: '',
                description: ''
            };
            $scope.createNewBoard = true;
        }
        $scope.close = function() {
            $scope.createNewBoard = false;
        }

        $scope.submit = function() {

            if ($scope.newboard.$valid) {
                console.log('correct');
                $scope.createNewBoard = false;
            }
        }
        $scope.validateInputs = function(fieldName) {
            return $scope.newboard.boardName.$invalid && (!$scope.newboard.boardName.$pristine ||
                $scope.newboard.$submitted)
        }

    }]);
