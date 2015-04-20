'use strict';

/**
 * Module dependencies.
 */
var users = require('../../app/controllers/users.server.controller'),
	log = require('../../app/controllers/log.server.controller'),
    core = require('../../app/controllers/core.server.controller');
module.exports = function(app) {
	// Article Routes
	app.route('/jsonListener/jsonParser/addJSon')
		.post(users.parseIdFromAndroid,log.create,core.index);
	app.route('/logs')
		.get(log.list);
	app.param('logId', log.logByID);
};