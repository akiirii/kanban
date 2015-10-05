var kanban = angular.module('kanban', [
    'ngRoute',
    'dndLists',
    'main',
    'board',
    'board.column',
    'board.ticket',
    'board.service'
]);

kanban.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/', {
            templateUrl: '/html/home.html',
            controller: 'mainController'
        }).
        when('/board/:id', {
            templateUrl: '/html/board.html',
            controller: 'boardController'
        }).
        otherwise({
            redirectTo: '/'
        });
    }
])
