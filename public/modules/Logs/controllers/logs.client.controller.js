'use strict';

angular.module('Logs').controller('LogsController', ['$scope', '$stateParams', '$location', 'Authentication', 'logs',
	function($scope, $stateParams, $location, Authentication, logs) {
		$scope.authentication = Authentication;
		$scope.find = function() {
			$scope.Logs = logs.query();
		};
	}
]);