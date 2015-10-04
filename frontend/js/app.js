var kanban = angular.module('kanban', [
    'ngRoute',
    'main',
    'board',
    'board.ticket'
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
