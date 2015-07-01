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

			var setCaption = function (loading) {
				
				if (loading) {
					$scope.caption = loadingCaption;
					return;
				}
				$scope.caption = initialCaption;

			};
			
			// Init button with some caption and event handler
			setCaption();

			$scope.clicketyClack = function () {

				// Change caption to "loading..."
				setCaption(loadingCaption);

				// Call service method through attribute
				$scope.clickHandler(function () {
					$scope.caption = initialCaption;
				});

			};

		};

		return directive;
	}]);

})();