(function() {
    'use strict';

    var app = angular.module('yrapp');

    var paymentEntry = function() {
        return {
            restrict: 'EAC',
            scope: {
                payment: '=',
                deletePayment: '&',
                makeDefault: '&'
            },
            templateUrl: '/app/payment/payment-entry.html'
        }
    };

    app.directive('paymentEntry', paymentEntry);
}());
