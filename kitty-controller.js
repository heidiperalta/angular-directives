(function () {
	var app = angular.module('directivesApp');

	app.controller('kittyController', [ '$scope', 'kittyService', function ($scope, kittyService) {
		
		$scope.clickHandler = function (cb) {
			
			// I guess this button would have an empty body
			console.log(cb);
			console.log("hello from controller");

		};

	}]);

})();