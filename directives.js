(function () {
	
	var app = angular.module('directivesApp');

	/* Random contact card for kittens */
	app.directive('kittyCard', function () {
		
		var directive = {};

		// HTML template
		directive.templateUrl = 'kitty-template.html';
		directive.replace = true;

		// Isolate scope for my kittens?
		directive.scope = true;

		directive.link = function ($scope, $element, $attrs) {};

		return directive;

	});

	/* A simple "loading..." button */
	app.directive('loadingButton', ['$rootScope', function ($rootScope) {
		
		var directive = {};

		directive.restrict = 'EA';
		directive.templateUrl = 'loading-button.html';

		// Isolate my scope and get click event handler from parent scope (controller) 
		directive.scope = {
			clickHandler: "=ngClick"
		};

		directive.link = function ($scope, $element, $attrs) {
			
			// Requirements
			var loadingCaption = "Loading...";
			var defaultCaption = "Captionless Button";
			var initialCaption = $attrs.caption || defaultCaption;
			
			var callback = function () {
				
				$scope.caption = initialCaption;
				console.log("hello from directive");
			};

			// Init button with some caption and event handler
			$scope.caption = initialCaption;

			$scope.clicketyClack = function () {

				$scope.caption = loadingCaption;
				$scope.clickHandler(callback);
			};

		};

		return directive;
	}]);

})();