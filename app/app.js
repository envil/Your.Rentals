(function() {
	var app = angular.module('yrapp',[]);

	var MainCtrl = function ($scope) {
		$scope.message = "hello world";
	};
	app.controller('MainCtrl', ['$scope', MainCtrl]);
}());