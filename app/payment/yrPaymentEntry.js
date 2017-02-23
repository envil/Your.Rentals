(function() {
    'use strict';

    var app = angular.module('yrapp');

    var yrPaymentEntry = function() {

        return {
            restrict: 'EAC',
            scope: {
                payment: '=',
                deletePayment: '&',
                makeDefault: '&'
            },
            templateUrl: '/app/payment/yrPaymentEntry.html'
        }
    };

    app.directive('yrPaymentEntry', yrPaymentEntry);
}());
