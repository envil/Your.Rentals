(function() {
  'use strict';
  var app = angular.module('yrapp');
  var cardNumber = function() {
    // var CARDNUMBER_REGEX = /^[0-9]{16}$/g;
    return {
      require: 'ngModel',
      link: function(scope, elm, attrs, ctrl) {
        var controller = ctrl;
        elm.bind('change paste keyup', function() {
          var value = elm.val();
          var newValue = '';
          var displayValue = '';
          for (var i = 0; i < value.length && i < 19; i++) {
            if (value.charCodeAt(i) > 47 && value.charCodeAt(i) < 58) {
              newValue += value[i];
            }
          }
          for (var i = 0; i < newValue.length; i++) {
            displayValue += newValue[i];
            if (i == 3 || i == 7 || i == 11) {
              displayValue += ' ';
            }
          }
          elm.val(displayValue);
          this.checkValidity();
          // var result = CARDNUMBER_REGEX.test(newValue);
        })
      }
    }
  };
  var cardExpMonth = function() {
    var CARDEXPMONTH_REGEX = /^([0][1-9]|[1][0-2])$/g;
    return {
      require: 'ngModel',
      link: function(scope, elm, attrs, ctrl) {
        elm.bind('change paste keyup', function() {
          var value = elm.val();
          if (value > 12) { value = '12'; }
          var newValue = '';
          for (var i = 0; i < value.length && i < 2; i++) {
            if (value.charCodeAt(i) > 47 && value.charCodeAt(i) < 58) {
              newValue += value[i];
            }
          }
          elm.val(newValue);
          // var result = CARDEXPMONTH_REGEX.test(value);
        })
      }
    }
  };
  var cardExpYear = function() {
    // var CARDEXPYEAR_REGEX = /^[0-9]{2}$/g;
    return {
      require: 'ngModel',
      link: function(scope, elm, attrs, ctrl) {
        elm.bind('change paste keyup', function() {
          var value = elm.val();
          var newValue = '';
          for (var i = 0; i < value.length && i < 2; i++) {
            if (value.charCodeAt(i) > 47 && value.charCodeAt(i) < 58) {
              newValue += value[i];
            }
          }
          elm.val(newValue);
          this.checkValidity();
        })
      }
    }
  };
  var cardCvc = function() {
    var CARDCVC_REGEX = /^[0-9]{3}$/g;
    return {
      require: 'ngModel',
      link: function(scope, elm, attrs, ctrl) {
        elm.bind('change paste keyup', function() {
          var value = elm.val();
          var newValue = '';
          for (var i = 0; i < value.length && i < 3; i++) {
            if (value.charCodeAt(i) > 47 && value.charCodeAt(i) < 58) {
              newValue += value[i];
            }
          }
          elm.val(newValue);
          this.checkValidity();
          // var result = CARDCVC_REGEX.test(value);
        })
      }
    }
  };
  app.directive('cardNumber', cardNumber);
  app.directive('cardExpMonth', cardExpMonth);
  app.directive('cardExpYear', cardExpYear);
  app.directive('cardCvc', cardCvc);
}());
