(function() {
    'use strict';
    var app = angular.module('yrapp');

    var MainCtrl = function($scope) {
        $scope.payments = [{
            'cardNumber': '1234123412341234',
            'expiration': {
                'month': '08',
                'year': '21',
            },
            'cvc': '900',
            'isDefault': true
        }, {
            'cardNumber': '4567456745674567',
            'expiration': {
                'month': '01',
                'year': '30',
            },
            'cvc': '143',
            'isDefault': false
        }];

        $scope.deletePayment = function(index) {
          if (typeof($scope.payments) != 'undefined' && $scope.payments != null && $scope.payments.length > 0) {
            $scope.payments.splice(index, 1);
            if (index == 0 && $scope.payments.length > 0) {
              $scope.makeDefault(0);
            }
          }
        }

        $scope.makeDefault = function (index) {
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
    };

    app.controller('MainCtrl', ['$scope', MainCtrl]);
}());
