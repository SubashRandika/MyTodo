'use strict';

angular.module('myTodoApp')
  .controller('MainCtrl', function ($scope) {
      $scope.todos = [];

      $scope.addTodo = function(){
        var myTodo = $scope.todo;

        if (myTodo !== undefined) {
            $scope.todos.push(myTodo);
            $scope.todo = '';
            $scope.isSuccess = true;
            $scope.successMsg = 'Your Todo is successfully added...';
            $scope.isfail = false;
            autoCloseAlert('alert-success', 3000);
        } else {
            $scope.isSuccess = false;
            $scope.isfail = true;
            $scope.failMsg = 'Please enter what you need to be done...';
            autoCloseAlert('alert-danger', 3000);
        }

      };

      $scope.removeTodo = function(index){
        $scope.todos.splice(index, 1);
        $scope.isSuccess = true;
        $scope.successMsg = 'Todo is successfully deleted...';
        autoCloseAlert('alert-success', 3000);
      };

      var autoCloseAlert = function(selector, delay){
          $('.' + selector).fadeIn(1000, 'linear', function(){
            window.setTimeout(function(){
              $('.' + selector).fadeOut(1000, 'linear');
            }, delay);
          });
      };

  });
