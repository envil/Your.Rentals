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
  };

  app.controller('MainCtrl', ['$scope', MainCtrl]);
}());
