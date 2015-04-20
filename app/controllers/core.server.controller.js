'use strict';

/**
 * Module dependencies.
 */
exports.index = function(req, res) {
	res.render('index', {
		user: req.user || null,
		image: req.image || null,
		request: req
	});
};