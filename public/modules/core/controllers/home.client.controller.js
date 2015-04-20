'use strict';


angular.module('core').controller('HomeController', ['$scope', 'Authentication','image',
	function($scope, Authentication) {
		// This provides Authentication context.
		$scope.image = image;
		$scope.authentication = Authentication;
	}
]);