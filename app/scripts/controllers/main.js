'use strict';

angular.module('myTodoApp')
  .controller('MainCtrl', function ($scope) {
      $scope.todos = ['Item 1', 'Item 2', 'Item 3'];

      $scope.addTodo = function(){
        var myTodo = $scope.todo;

        if (myTodo !== undefined) {
            $scope.todos.push(myTodo);
            $scope.todo = '';
            $scope.isSuccess = true;
            $scope.isfail = false;
            autoCloseAlert('alert-success', 3000);
        } else {
            $scope.isSuccess = false;
            $scope.isfail = true;
            autoCloseAlert('alert-danger', 3000);
        }

      };

      var autoCloseAlert = function(selector, delay){
          window.setTimeout(function(){
            $('.' + selector).fadeTo(500, 0).slideUp(500, function(){
                $(this).remove();
            });
          }, delay);
      };

  });
