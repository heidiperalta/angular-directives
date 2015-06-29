(function () {
	var app = angular.module('directivesApp');

	app.controller('kittyController', [ '$scope', 'kittyService', function ($scope, kittyService) {
		
		$scope.clickHandler = function (buttonCallback) {
			kittyService.takeSomeTime(buttonCallback);
		};

	}]);

})();