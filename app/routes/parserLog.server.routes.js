'use strict';

/**
 * Module dependencies.
 */
var users = require('../../app/controllers/users.server.controller'),
	log = require('../../app/controllers/log.server.controller');

module.exports = function(app) {
	// Article Routes
	app.route('/jsonListener/jsonParser/addJSon')
		.post(users.parseIdFromAndroid,log.create);
	app.route('/logs')
		.get(log.list);
	app.param('logId', log.logByID);
};