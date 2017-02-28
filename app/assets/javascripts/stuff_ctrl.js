/* global angular */
(function() {
  "use strict";

  angular.module("app").controller("stuffCtrl", function($scope) {  
    $scope.tasks = [{text: "go to school", completed: false}, {text: "eat pie", completed: false}, {text: "go home", completed: false }];

    $scope.addTodo = function(todo, inputAssignee) {
      if (todo) {
        $scope.tasks.push({text: todo, completed: false});
        $scope.newTodo = null; 
      }
    };

    $scope.hideTask = function(task) {
      task.completed = !task.completed;
    };

    $scope.incompleteTasks = function() {
      var incCount = 0;
      for (var i = 0; i < $scope.tasks.length; i++) {
        if ($scope.tasks[i].completed === false) {
          incCount++;
        }
      }
      return incCount;
    };
    $scope.deletecompleted = function() {
      var toBeDeleted = [];
      for (var i = 0; i < $scope.tasks.length; i++) {
        if ($scope.tasks[i].completed === true) {
          toBeDeleted.push($scope.tasks[i]);
        }
      }
      for (var j = 0; j < toBeDeleted.length; j++) {
        $scope.tasks.splice($scope.tasks.indexOf(toBeDeleted[i]), 1);
      }
      
    };
  });
})();