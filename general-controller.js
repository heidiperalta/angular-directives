(function () {
	var app = angular.module('directivesApp');

	app.controller('generalController', [ '$scope', function ($scope) {
		
		var model = {};

		var kitty = {
			name: 'rigoberta',
			color: 'gray'
		}

		model.kitty	= kitty;

		$scope.model = model;

	}]);	

})();