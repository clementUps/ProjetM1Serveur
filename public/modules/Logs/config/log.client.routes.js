'use strict';

// Setting up route
angular.module('Logs').config(['$stateProvider',
	function($stateProvider) {
		// Articles state routing
		$stateProvider.
		state('listLogs', {
			url: '/logs',
			templateUrl: 'modules/Logs/views/list-log.client.view.html'
		});
	}
]);