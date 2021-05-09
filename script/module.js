
var app = angular.module("myApp", ["ngRoute"]);

// App Module with Dependence’s 

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "views/start.htm"
    })
    .when("/memoryGame", {
        templateUrl : "views/memoryGame.htm"
    })
});
 