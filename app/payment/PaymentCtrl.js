(function() {
  'use strict';
  var app = angular.module('yrapp');

  var MainCtrl = function($scope) {
    $scope.payments = [];
    $scope.showPanel = false;
  };

  app.controller('MainCtrl', ['$scope', MainCtrl]);
}());
