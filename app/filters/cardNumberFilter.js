(function() {
    'use strict';
    var app = angular.module('yrapp', []);

    var cardNumberFilter = function() {
        return function(cardNumber) {
            if (typeof(cardNumber) == 'undefined' || cardNumber == null) {
                return '';
            }
            if (cardNumber.length < 16) {
                return 'error: invalid card number';
            }
            return 'XXXX XXXX XXXX ' + cardNumber.substr(12, 15);
        }
    }

    app.filter('cardNumberFilter', cardNumberFilter);
}());
