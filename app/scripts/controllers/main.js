'use strict';

/**
 * @ngdoc function
 * @name theboardApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the theboardApp
 */
angular.module('theboardApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
