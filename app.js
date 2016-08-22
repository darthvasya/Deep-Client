var app = angular.module('myApp', ["ngRoute"]);

app.config(['$routeProvider', function($routeProvide) {
  $routeProvide
    .when('/', {
      redirectTo: '/Login'
    })
    .otherwise({
      redirectTo: '/Login'
    });
}]);
