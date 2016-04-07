var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider, $locationProvider){
  $routeProvider
      .when('/', {
        templateUrl: 'partials/details.html',
        controller: 'detailsCtrl'
      })
      .when('/charges', {
        templateUrl: 'partials/charges.html',
        controller: 'chargesCtrl'
      })
      .when('/earnings', {
        templateUrl: 'partials/earnings.html',
        controller: 'earningsCtrl'
      })
      .otherwise('/');
  // $locationProvider.html5Mode(true);
});