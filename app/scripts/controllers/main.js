'use strict';

/**
 * @ngdoc function
 * @name tareasApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tareasApp
 */
angular.module('tareasApp')
  .controller('MainCtrl', function ($scope) {
    $scope.tareas = [ 'Item'];
    $scope.addTarea = function () {
    	$scope.tareas.push($scope.tarea);
    	$scope.tarea = '';
    }
  });
