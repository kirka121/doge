'use strict';

angular.module('dogeApp')
  .controller('GroupsCtrl', ['$scope', 'Group', function ($scope, Group) {
    $scope.groups = Group.query();
  }]);