'use strict';

/**
 * @ngdoc function
 * @name dogeApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the dogeApp
 */
angular.module('dogeApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
