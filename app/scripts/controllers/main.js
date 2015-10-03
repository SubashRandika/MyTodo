'use strict';

angular.module('myTodoApp')
  .controller('MainCtrl', function ($scope) {
      $scope.todos = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];
  });
