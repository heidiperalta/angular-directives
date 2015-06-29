(function () {
	
	var app = angular.module('directivesApp');

	app.directive('kittyCard', function () {
		
		var directive = {};

		// HTML template
		directive.templateUrl = 'kitty-template.html';

		// Isolate scope for my kittens?
		directive.scope = {
			kitty: '=kittyCard'
		};

		directive.replace = true;

		directive.link = function ($scope, $element, $attrs) {


		};

		return directive;

	});

})();