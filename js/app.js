'use strict';


// Declare app level module which depends on filters, and services
var app = angular.module('HackApp', [
  'ngRoute',
  'firebase',
  'HackApp.filters',
  'HackApp.services',
  'HackApp.directives',
  'HackApp.controllers'
]);
app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {templateUrl: 'partials/login.html', controller: 'AuthController'});
  $routeProvider.when('/home', {templateUrl: 'partials/home.html', controller: 'AuthController'});
  $routeProvider.when('/coke', {templateUrl: 'partials/coke.html', controller: 'CokeController'});
  $routeProvider.otherwise({redirectTo: '/'});
}]);

app.constant('FIREBASE_URL', 'https://cokemachine.firebaseio.com/');

