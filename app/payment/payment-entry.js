(function() {
    'use strict';

    var app = angular.module('yrapp');

    var paymentEntry = function() {
        return {
            restrict: 'EAC',
            scope: {
                payment: '=payment',
                deletePayment: '&deletePayment'
            },
            templateUrl: '/app/payment/payment-entry.html'
        }
    };

    app.directive('paymentEntry', paymentEntry);
}());
