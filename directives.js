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

	app.directive('loadingButton', function () {
		
		var directive = {};

		directive.restrict = 'E';
		directive.templateUrl = 'loading-button.html';

		directive.link = function ($scope, $element, $attrs) {
			
			var initCaption = "Click me";
			$scope.caption = initCaption;

			$scope.changeCaption = function () {

				if ($attrs.caption) {
					if ($scope.caption === initCaption) {
						$scope.caption = $attrs.caption;
					}
					else {
						$scope.caption = initCaption;
					}
				}
				
			};

		};

		return directive;
	});

})();