(function() {
    'use strict';
    var app = angular.module('yrapp');
    var cardNumber = function() {
        const CARDNUMBER_REGEX = '^[0-9]{16}$';
        let m;
        return {
            require: 'ngModel',
            link: function(scope, elm, attrs, ctrl) {
                elm.bind('keyup', function() {
                  console.log(elm.value);
                    while (m = CARDNUMBER_REGEX.exec(elm[0].value) !== null) {
                        // This is necessary to avoid infinite loops with zero-width matches
                        if (m.index === CARDNUMBER_REGEX.lastIndex) {
                            CARDNUMBER_REGEX.lastIndex++;
                        }

                        // The result can be accessed through the `m`-variable.
                        m.forEach((match, groupIndex) => {
                            console.log(`Found match, group ${groupIndex}: ${match}`);
                        });
                    }
                })
            }
        }
    };
    app.directive('cardNumber', cardNumber);
}());
