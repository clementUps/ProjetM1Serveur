'use strict';

// Configuring the Articles module
angular.module('Logs').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', 'Logs', 'Logs', 'dropdown', '/logs');
		Menus.addSubMenuItem('topbar', 'Logs', 'List Logs', 'logs');
	}
]);