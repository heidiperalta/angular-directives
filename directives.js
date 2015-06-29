(function () {
	
	var app = angular.module('directivesApp');

	/* Random contact card for kittens */
	app.directive('kittyCard', function () {
		
		var directive = {};

		// HTML template
		directive.templateUrl = 'kitty-template.html';

		// Isolate scope for my kittens?
		directive.scope = {
			kitty: '=kittyCard'
		};

		directive.replace = true;

		directive.link = function ($scope, $element, $attrs) {};

		return directive;

	});

	/* A simple "loading..." button */
	app.directive('loadingButton', function () {
		
		var directive = {};

		directive.restrict = 'E';
		directive.templateUrl = 'loading-button.html';

		directive.link = function ($scope, $element, $attrs) {
			
			var loadingCaption = "Loading...";
			var defaultCaption = "Captionless Button";

			var setCaption = function (loading) {

				if (loading) {
					return $scope.caption = loading;
				}

				// TODO: Make this part work
				$scope.caption = $attrs.caption || defaultCaption;
			};

			var buttonCallback = function (response) {
				setCaption();
				alert(response);
			};
			
			// Init button with some caption
			setCaption();

			$scope.changeCaption = function () {
				setCaption(loadingCaption);
				$scope.clickHandler(buttonCallback);
			};

		};

		return directive;
	});

})();