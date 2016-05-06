var myPalaceApp = angular.module('myPalaceApp', [
    'ngRoute', 'ngAnimate', 'myPalaceCtrls'
]);

myPalaceApp.config(function($routeProvider) {
    $routeProvider.when('/hello', {
        templateUrl: 'tpls/hello.html',
        controller: 'HelloCtrl'
    }).when('/bookList', {
        templateUrl: 'tpls/bookList.html',
        controller: 'BookListCtrl'
    }).when('/cafeList', {
        templateUrl: 'tpls/cafeList.html',
        controller: 'CafeListCtrl'
    }).otherwise({
        redirectTo: '/hello'
    })
});
