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


            console.log($scope.newboard);
            //$scope.createNewBoard = false;
        }

    }]);
