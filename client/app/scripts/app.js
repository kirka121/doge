'use strict';

/**
 * @ngdoc overview
 * @name dogeApp
 * @description
 * # dogeApp
 *
 * Main module of the application.
 */
var app = angular.module('dogeApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ]);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    })
    .when('/about', {
      templateUrl: 'views/about.html',
      controller: 'AboutCtrl'
    })
    .when('/groups', {
      templateUrl: 'views/groups.html',
      controller: 'GroupsCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
});

app.factory('Group', ['$resource', function($resource) {
  return $resource('/api/groups/:id.json', null, {
    'update': { method: 'PUT' }
  });
}]);