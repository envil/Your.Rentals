(function() {
  'use strict';
  var app = angular.module('yrapp');
  var yrPayment = function() {
    var controller = ['$scope', function($scope) {
      $scope.showAddFormFlag = false;
      $scope.newPayment = {};
      // $scope.CARDEXPMONTH_REGEX = /^([0][1-9]|[1][0-2])$/g;

      $scope.makeDefaultPayment = function(index) {
        if (typeof($scope.payments) != 'undefined' && $scope.payments != null) {
          for (var i = $scope.payments.length - 1; i >= 0; i--) {
            if ($scope.payments[i]) {
              $scope.payments[i].isDefault = false;
            }
          }
          if (index >= 0 && index < $scope.payments.length) {
            $scope.payments[index].isDefault = true;
          }
        }
      }

      $scope.deletePayment = function(index) {
        var isDefault = $scope.payments[index].isDefault;
        if (typeof($scope.payments) != 'undefined' && $scope.payments != null && $scope.payments.length > 0) {
          $scope.payments.splice(index, 1);
          if (isDefault && $scope.payments.length > 0) {
            $scope.makeDefaultPayment(0);
          }
        }
      }

      $scope.toggleAddForm = function(flag) {
        $scope.showAddFormFlag = flag;
        if (!flag) {
          $scope.newPayment = {};
        }
      }

      $scope.addNewPayment = function() {
        $scope.showAddFormFlag = false;
        $scope.payments.push($scope.newPayment);
        $scope.newPayment = {};
      }
    }];
    return {
      scope: {
        payments: '='
      },
      controller: controller,
      templateUrl: '/app/payment/yrPayment.html'
    }
  };
  app.directive('yrPayment', yrPayment);
}());
