(function () {
	
	var app = angular.module('directivesApp');

	app.service('kittyService', ['$timeout', function($timeout) {

		var that = this;

		that.takeSomeTime = function (buttonCallback) {
			$timeout(function () { 
				buttonCallback("test passed!");
			}, 3000);
		};

	}]);

})();