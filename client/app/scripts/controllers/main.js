'use strict';

/**
 * @ngdoc function
 * @name dogeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the dogeApp
 */
angular.module('dogeApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
