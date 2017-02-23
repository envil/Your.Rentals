(function() {
    'use strict';

    var app = angular.module('yrapp');

    var paymentEntry = function() {
        return {
            templateUrl: '/app/payment/payment-entry.html'
        }
    };

    app.directive('paymentEntry', paymentEntry);
}());
