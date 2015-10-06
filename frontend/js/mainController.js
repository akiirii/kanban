angular
    .module('main', [])
    .controller('mainController', ['$scope', '$location', 'boardService', function($scope, $location, boardService) {
        $scope.error = false;
        var getBoards = function() {
            $scope.loading = true;
            boardService.getBoards().then(function(response) {
                $scope.boards = response;
                $scope.loading = false;
            })
        };
        getBoards();

        $scope.addBoard = function() {
            $scope.error = false;
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
                $scope.createNewBoard = false;
                boardService.createBoard($scope.board).then(function(response) {
                    if (response.id !== undefined) {
                        $location.url('/board/' + response.id);
                    } else {
                        $scope.error = true;
                        getBoards();
                    }

                });
            }
        }
        $scope.validate = function() {
            return $scope.newboard.boardName.$invalid && $scope.submited
        }

    }]);
