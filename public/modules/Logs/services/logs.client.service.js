'use strict';

//Articles service used for communicating with the articles REST endpoints
angular.module('Logs').factory('logs', ['$resource',
	function($resource) {
		return $resource('logs/:logsId', {
			logsId: '@_id'
		});
	}
]);