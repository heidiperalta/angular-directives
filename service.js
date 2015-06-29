(function () {
	
	var app = angular.module('directivesApp');

	app.service('kittyService', function() {

		var that = this;

		that.takeSomeTime = function (buttonCallback) {
			setTimeout(function () { 
				buttonCallback("test passed!");
			}, 3000);
		};

	});

})();